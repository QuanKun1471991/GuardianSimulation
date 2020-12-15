namespace :deploy do
  desc 'Build (compiles by specifying commands to archive compiled products)'
  task :compile_assets do
    invoke 'deploy:build:copy_manifest'
    invoke 'deploy:build:precompile_local'
    invoke 'deploy:build:release'
  end

  namespace :build do
    desc 'Downloading shared files from remote folder'
    task :copy_manifest do
      on roles(:all) do
        within release_path do
          execute :echo, "\"#{fetch(:current_revision)}\""
          fetch(:linked_files).each do |file|
            download! file, File.dirname(file), log_percent: 25
          end
        end
      end
    end

    desc "Precompile assets locally"
    task :precompile_local do
      run_locally do
        execute :echo, "\"Check nodeJS version\""
        node_version = capture('node -v')
        execute :echo, "\"#{node_version}\""
        if node_version != fetch(:node_version)
          error "Node version didn't match #{node_version}"
          exit 1
        end

        execute :echo, "\"Package install\""
        execute :rm, "-rf", 'out' if test "[ -d out ]"
        execute :yarn, 'install'

        execute :yarn, 'next build'
        execute :yarn, 'next export'

        execute :echo, "\"Zip build release\""
        execute :rm, "-rf", 'build.tar' if test "[ -d build.tar ]"
        execute :tar, '-cvf', 'build.tar', 'out'
        execute :ls, '-al'
      end
    end

    desc "Rsync to web servers"
    task :release do
      on roles(:all) do
        within release_path do
          upload! 'build.tar', release_path
          execute :ls, '-al'
          execute :rm, "-rf", "#{release_path}/#{build}" if test "[ -d build ]"
          execute "tar -xvf #{release_path}/build.tar -C #{release_path}"
        end
      end
    end
  end

  before "symlink:release", :compile_assets
end
