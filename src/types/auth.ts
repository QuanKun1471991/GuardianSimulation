export interface IResponseCurrentUser {
  data: {
    attributes: {
      id: number | string;
      email: string;
      name: string;
      role: string;
      company: {
        id: number;
        name: string;
        company_type: string;
      };
    };
  };
}
