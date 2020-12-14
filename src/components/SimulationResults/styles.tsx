const styles = () => ({
  tableWrapper: {
    overflowY: "auto" as const,
    height: "100%",
  },
  table: {
    "& thead": {
      "& th": {
        backgroundColor: "#303030",
        color: "#fff",
      },
    },
    paddingBottom: "10px",
  },
  tableCell: {
    // padding: '16px 5px',
  },
});

export default styles;
