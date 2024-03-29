import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

const tableinfo = [];

for (let i = 1; i <= 15; i++) {
  tableinfo.push(i);
}
console.log(tableinfo);

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(fat1, fat2, fat3, fat4, fat5, fat6) {
  return { fat1, fat2, fat3, fat4, fat5, fat6 };
}

const rows = [
  createData(1, 2, 3, 4, 5, 6),
  createData(1, 2, 3, 4, 5, 6),
  createData(1, 2, 3, 4, 5, 6),
  createData(1, 2, 3, 4, 5, 6),
  createData(1, 2, 3, 4, 5, 6),
  createData(1, 2, 3, 4, 5, 6),
  createData(1, 2, 3, 4, 5, 6),
  createData(1, 2, 3, 4, 5, 6),
  createData(1, 2, 3, 4, 5, 6),
  createData(1, 2, 3, 4, 5, 6),
  createData(1, 2, 3, 4, 5, 6),
  createData(1, 2, 3, 4, 5, 6),
  createData(1, 2, 3, 4, 5, 6),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);

  const [mintedids, setMintedids] = React.useState([]);

  const url = "https://reffer.ap.ngrok.io";
  React.useEffect(() => {
    const init = async () => {
      axios.get(`${url}/nfts`).then((res) => {
        console.log("all minted nfts", res);
        setMintedids(res.data[0].ids);
      });
    };
    init();
    setInterval(() => {
      init();
    }, 3000);
  }, []);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 6));
    setPage(0);
  };

  return (
    <div className="table-mobile">
      <div style={{ textAlign: "center" }}>
        <span className="title1">Already Minted Nft</span>
      </div>
      {/*   <TableContainer component={Paper}>
      <Table sx={{ minWidth:300}} aria-label="custom pagination table">
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
           
            <TableCell  align="center">
              {row.fat1}
            </TableCell>
            <TableCell  align="center">
              {row.fat2}
            </TableCell>
            <TableCell  align="center">
              {row.fat3}
            </TableCell>
            <TableCell  align="center">
              {row.fat4}
            </TableCell>
            <TableCell  align="center">
              {row.fat5}
            </TableCell>
            <TableCell  align="center">
              {row.fat6}
            </TableCell>
       
          
          </TableRow>
        ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[7, 10, 25, { label: "All", value: -1 }]}
              colSpan={6}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer> */}
      <div
        style={{ backgroundColor: "black", marginTop: "3rem", float: "right" }}
      >
        <div
          style={{
            /* max-width: 600px; */
            maxHeight: "400px",
            width: "80%",
            padding: "0rem",

            overflow: "auto",
            /* margin: 0px auto 0px 20px; */
            display: "block",
            color: "white",
            margin: "0 auto",
          }}
        >
          <div className="row">
            {mintedids &&
              mintedids.map((res) => {
                return (
                  <div
                    className="col-lg-1 col-md-1 col-sm-1 col-1"
                    style={{
                      width: "50px",
                      height: "24px",
                      display: "flex",
                      border: "0.1px solid white",
                      textAlign: "center",
                    }}
                  >
                    &nbsp;{res}&nbsp;{" "}
                  </div>
                );
              })}
          </div>
          <div className="tableline my-5">
            <span>
              Serial numbers of minted NFTs will appear in the box above.
              <p className="testing">
                (The numbers shown in the table above are for testing purpose.
                These numbers will reset before the actual time of mint i.e. 02
                November 2022 at 11:22AM (GMT+3)
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
