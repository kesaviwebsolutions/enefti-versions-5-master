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
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

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

function createData(
  fat1,
  fat2,
  fat3,
  fat4,
  fat5,
  fat6,
  fat7,
  fat8,
  fat9,
  fat10
) {
  return { fat1, fat2, fat3, fat4, fat5, fat6, fat7, fat8, fat9, fat10 };
}

const rows = [
  createData(1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  // createData(1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  // createData(1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  // createData(1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  // createData(1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  // createData(1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  // createData(1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  // createData(1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  // createData(1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  // createData(1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  // createData(1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  // createData(1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  // createData(1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="table-desktop" style={{backgroundColor:"#000000"}}>
    <div style={{paddingTop:"2rem"}}>
    <span className="title">Already Minted Nft</span></div>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 300, background: "#000" }}
          aria-label="custom pagination table"
        >
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.name}>
                <TableCell style={{ width: 100 }} align="center">
                  {row.fat1}
                </TableCell>
                <TableCell style={{ width: 100 }} align="center">
                  {row.fat2}
                </TableCell>
                <TableCell style={{ width: 100 }} align="center">
                  {row.fat3}
                </TableCell>
                <TableCell style={{ width: 100 }} align="center">
                  {row.fat4}
                </TableCell>
                <TableCell style={{ width: 100 }} align="center">
                  {row.fat5}
                </TableCell>
                <TableCell style={{ width: 100 }} align="center">
                  {row.fat6}
                </TableCell>
                <TableCell style={{ width: 100 }} align="center">
                  {row.fat7}
                </TableCell>
                <TableCell style={{ width: 100 }} align="center">
                  {row.fat8}
                </TableCell>
                <TableCell style={{ width: 100 }} align="center">
                  {row.fat9}
                </TableCell>
                <TableCell style={{ width: 100 }} align="center">
                  {row.fat10}
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
                rowsPerPageOptions={[5, 10, 15, { label: "All", value: -1 }]}
                colSpan={10}
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
      </TableContainer>
    </div>
  );
}
