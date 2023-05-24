import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';  
import { visuallyHidden } from '@mui/utils';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

/* 
Objeto para a tabela:
   name -> Nome do cliente
   document -> CPF ou CNPJ
   amount -> valor total
   contract -> número do contrato
   group -> número do grupo,
   clientInformation:
        * name: nome do cliente
        * document: CPF ou CNPJ do cliente
        * telephone: número do telefone
        * locality: cidade e UF do cliente
        * neighborhood: bairro do cliente
        * cep: CEP do cliente
    salesInformation:
        * contract: número do contrato
        * product: tipo do produto
        * parcelValue: valor das parcelas
        * creditValue: valor total
        * payment: forma de pagamento
        * dueDate: data de vencimento
        * situation: situação da cotação
*/
function createData(name, document, amount, contract, group) {
    return {
        name,
        document,
        amount,
        contract,
        group,
        clientInformation: [
            {
            name: name,
            document: "635.789.512.25",
            telephone: '(19) 91278-8965',
            locality: 'Indaiatuba - SP',
            neighborhood: 'Eldourado',
            cep: '13343-801'
            },
        ],
        salesInformation: [
            {
                contract: contract,
                product: "Imóvel",
                group: group,
                creditValue: amount,
                parcelValue: amount/10,
                payment: "BOLETO",
                dueDate: "20/04/2023",
                situation: "CONCLUÍDA"
            },
        ]
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow sx={{'& > *': { borderBottom: 'unset' }}}>
          <TableCell>
            <IconButton
                aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">{row.name}</TableCell>
          <TableCell align="right">{row.document}</TableCell>
          <TableCell align="right">{row.amount}</TableCell>
          <TableCell align="right">{row.contract}</TableCell>
          <TableCell align="right">{row.group}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Informações Pessoais
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Nome</TableCell>
                      <TableCell>CPF</TableCell>
                      <TableCell>Telefone</TableCell>
                      
                      <TableCell>Cidade/UF</TableCell>
                      <TableCell>Bairro</TableCell>
                      <TableCell>CEP</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.clientInformation.map((historyRow) => (
                      <TableRow key={historyRow.document}>
                        <TableCell scope="row">{historyRow.name}</TableCell>
                        <TableCell scope="row">{historyRow.document}</TableCell>
                        <TableCell scope="row">{historyRow.telephone}</TableCell>
                        <TableCell scope="row">{historyRow.locality}</TableCell>
                        <TableCell scope="row">{historyRow.neighborhood}</TableCell>
                        <TableCell scope="row">{historyRow.cep}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Cotações
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                        <TableCell>Contrato</TableCell>
                        <TableCell>Produto</TableCell>
                        <TableCell>Grupo</TableCell>
                        <TableCell>Valor parcela</TableCell>
                        <TableCell>Valor crédito</TableCell>
                        <TableCell>Forma.pgto</TableCell>
                        <TableCell>Data venc</TableCell>
                        <TableCell>Situação</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.salesInformation.map((historyRow) => (
                        <TableRow key={historyRow.contract}>
                            <TableCell scope="row">{historyRow.contract}</TableCell>
                            <TableCell scope="row">{historyRow.product}</TableCell>
                            <TableCell scope="row">{historyRow.group}</TableCell>
                            <TableCell scope="row">{historyRow.parcelValue}</TableCell>
                            
                            <TableCell scope="row">{historyRow.creditValue}</TableCell>
                            <TableCell scope="row">{historyRow.payment}</TableCell>
                            <TableCell scope="row">{historyRow.dueDate}</TableCell>
                            <TableCell scope="row">{historyRow.situation}</TableCell>
                        </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
}
  
  

const rows = [
  createData('Luis Felipe Bueno', 78931789845, 50000, 45887, 48557),
  createData('Leandro Torres', 78931789475, 50000, 135228, 2566),
  createData('Marcio Scotuzzi', 78931744845, 100000, 566693, 5699),
  createData('Welligton Bezerra', 77881789845, 320000, 89789, 45885),
  createData('Felipe Luis Silva', 78931789845, 48050, 4828, 47552),
  createData('Mariana Rodrigues', 84221789845, 725000, 135788, 1235666),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {},
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Nome',
  },
  {
    id: 'document',
    numeric: true,
    disablePadding: false,
    label: 'CPF',
  },
  {
    id: 'amount',
    numeric: true,
    disablePadding: false,
    label: 'Valor total',
  },
  {
    id: 'contract',
    numeric: true,
    disablePadding: false,
    label: 'Contrato',
  },
  {
    id: 'group',
    numeric: true,
    disablePadding: false,
    label: 'Grupo',
  },
];

// Cores padrão:
const darkColor = "#1f1f1f";
const darkColorSecundary = "#242424";
const greenColor = "#00E2AC";
const whiteColor = "#ffffff";

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead sx={{backgroundColor: darkColorSecundary}}>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding='15px'
            sortDirection={orderBy === headCell.id ? order : false}  
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              sx={{color: greenColor}}
            >
              {headCell.label}
              {
                orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null
              }
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar() {
  return (
    <Toolbar
      sx={{
        backgroundColor: darkColorSecundary, color: greenColor,
        fontWeight: 'bold'
      }}
    >
      <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Perfis de Clientes
        </Typography>
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('document');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClick = (event, name) => {
    console.log('clicou', name)
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer >
          <Table
            sx={{ width: '100%',}}
            aria-labelledby="tableTitle"
            size='small'
          >
            <EnhancedTableHead
              numSelected={selected.length}
              sx={{color: greenColor}}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                return (
                    <Row row={row} key={row.name} />
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[2,5,10]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{backgroundColor: darkColorSecundary, color: whiteColor}}
        />
      </Paper>
    </Box>
  );
}