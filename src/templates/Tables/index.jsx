import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
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
import {DarkTheme} from '../../themes/mui';
import { maskCpf } from '../../config/regex';
import Button from '@mui/material/Button';

function maskMoney(value){
  return (Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(value)).replace("R$","")
}

/* 
Objeto para a tabela:
   name -> Nome do cliente
   document -> CPF ou CNPJ
   amount -> valor total
   propostNumber -> número da proposta
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
function createData(amount, propostNumber, clientObj, salesObj) {
    const name = clientObj.name;
    const document = clientObj.document;
    return {
        name,
        document,
        amount,
        propostNumber,
        clientInformation: clientObj,
        salesInformation: salesObj,
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow sx={{'& > *': { borderBottom: 'unset' }, backgroundColor: '#242424', borderWidth: 0}}>
          <TableCell sx={{borderWidth: 0}}>
            <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
                color='primary'
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row" sx={{color: whiteColor, borderWidth: 0}}>{row.name}</TableCell>
          <TableCell align="right" sx={{color: whiteColor, borderWidth: 0}}>{maskCpf(`${row.document}`)}</TableCell>
          <TableCell align="right" sx={{color: whiteColor, borderWidth: 0}}>{maskMoney(row.amount)}</TableCell>
          <TableCell align="right" sx={{color: whiteColor, borderWidth: 0}}>{row.propostNumber}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0, backgroundColor: '#2a2929' }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }} >
                <Typography variant="h6" gutterBottom component="div" sx={{color: greenColor}}>
                  Informações Pessoais
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{color: greenColor, borderWidth: 0}}>Nome</TableCell>
                      <TableCell sx={{color: greenColor, borderWidth: 0}}>CPF</TableCell>
                      <TableCell sx={{color: greenColor, borderWidth: 0}}>Telefone</TableCell>
                      <TableCell sx={{color: greenColor, borderWidth: 0}}>Cidade/UF</TableCell>
                      <TableCell sx={{color: greenColor, borderWidth: 0}}>Bairro</TableCell>
                      <TableCell sx={{color: greenColor, borderWidth: 0}}>CEP</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      <TableRow>
                        <TableCell scope="row" sx={{color: whiteColor, borderWidth: 0}}>{row.clientInformation.name}</TableCell>
                        <TableCell scope="row" sx={{color: whiteColor, borderWidth: 0}}>{maskCpf(`${row.clientInformation.document}`)}</TableCell>
                        <TableCell scope="row" sx={{color: whiteColor, borderWidth: 0}}>{row.clientInformation.telephone}</TableCell>
                        <TableCell scope="row" sx={{color: whiteColor, borderWidth: 0}}>{row.clientInformation.locality}</TableCell>
                        <TableCell scope="row" sx={{color: whiteColor, borderWidth: 0}}>{row.clientInformation.neighborhood}</TableCell>
                        <TableCell scope="row" sx={{color: whiteColor, borderWidth: 0}}>{row.clientInformation.cep}</TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
              </Box>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div" sx={{color: greenColor}}>
                  Cotações
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                        <TableCell sx={{color: greenColor, borderWidth: 0}}>Contrato</TableCell>
                        <TableCell sx={{color: greenColor, borderWidth: 0}}>Produto</TableCell>
                        <TableCell sx={{color: greenColor, borderWidth: 0}}>Grupo</TableCell>
                        <TableCell sx={{color: greenColor, borderWidth: 0}}>Valor parcela</TableCell>
                        <TableCell sx={{color: greenColor, borderWidth: 0}}>Valor crédito</TableCell>
                        <TableCell sx={{color: greenColor, borderWidth: 0}}>Forma.pgto</TableCell>
                        <TableCell sx={{color: greenColor, borderWidth: 0}}>Data venc</TableCell>
                        <TableCell sx={{color: greenColor, borderWidth: 0}}>Situação</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.salesInformation.map((historyRow) => (
                        <TableRow key={historyRow.contract}>
                            <TableCell scope="row" sx={{color: whiteColor, borderWidth: 0}}>{historyRow.contract}</TableCell>
                            <TableCell scope="row" sx={{color: whiteColor, borderWidth: 0}}>{historyRow.product}</TableCell>
                            <TableCell scope="row" sx={{color: whiteColor, borderWidth: 0}}>{historyRow.group}</TableCell>
                            <TableCell scope="row" sx={{color: whiteColor, borderWidth: 0}}>{maskMoney(historyRow.parcelValue)}</TableCell>
                            <TableCell scope="row" sx={{color: whiteColor, borderWidth: 0}}>{maskMoney(historyRow.creditValue)}</TableCell>
                            <TableCell scope="row" sx={{color: whiteColor, borderWidth: 0}}>{historyRow.payment}</TableCell>
                            <TableCell scope="row" sx={{color: whiteColor, borderWidth: 0}}>{historyRow.dueDate}</TableCell>
                            <TableCell scope="row" sx={{color: whiteColor, borderWidth: 0}}>{historyRow.situation}</TableCell>
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

// Mock:
const client1 = {
    name: "Luis Felipe Bueno",
    document: 52931247782,
    telephone: '(19) 91278-8965',
    locality: 'Indaiatuba - SP',
    neighborhood: 'Eldourado',
    cep: '13343-801'
};

const client2 = {
  name: "Wellington Bezerra",
  document: 52931247798,
  telephone: '(19) 94125-9080',
  locality: 'Indaiatuba - SP',
  neighborhood: 'Eldourado',
  cep: '13343-801'
};

const client3 = {
  name: "Marcio Scotuzzi Junior",
  document: 45971256623,
  telephone: '(19) 97489-1236',
  locality: 'Indaiatuba - SP',
  neighborhood: 'Eldourado',
  cep: '13343-801'
};
const sales = [
      {
        contract: 142225,
        product: "Imóvel",
        group: 455,
        creditValue: 100000,
        parcelValue: 100000/10,
        payment: "BOLETO",
        dueDate: "20/04/2023",
        situation: "CONCLUÍDA"
    },
    {
      contract: 455221,
      product: "Carro",
      group: 236,
      creditValue: 60000,
      parcelValue: 60000/10,
      payment: "BOLETO",
      dueDate: "15/03/2023",
      situation: "CONCLUÍDA"
  },
]

let rows = [
  createData(500144, 5, client1, sales),
  createData(144520, 3, client2, sales),
  createData(120000, 2, client3, sales),
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
    id: 'numberPropost',
    numeric: true,
    disablePadding: false,
    label: 'Número da proposta',
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
    <ThemeProvider theme={DarkTheme}>
        <TableHead sx={{backgroundColor: darkColorSecundary}}>
          <TableRow>
              {headCells.map((headCell) => (
              <TableCell
                  key={headCell.id}
                  align={headCell.numeric ? 'right' : 'left'}
                  padding='15px'
                  sx={{color: greenColor}}
                  sortDirection={orderBy === headCell.id ? order : false}  
              >
                  <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : 'asc'}
                      onClick={createSortHandler(headCell.id)}
                      sx={{ color: greenColor }}
                      color='primary'
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
    </ThemeProvider>
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
  const [rowsCopy, setRowsCopy] = React.useState(rows)
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchByName, setSearchByName] = React.useState('');
  const [searchByDocument, setSearchByDocument] = React.useState('');
  const [searchByPropost, setSearchByPropost] = React.useState('');
  const [searchByMinValue, setSearchByMinValue] = React.useState(0);
  const [searchByMaxValue, setSearchByMaxValue] = React.useState(0);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowsCopy.length) : 0;

  const visibleRows = React.useMemo(() =>stableSort(rowsCopy, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  
  // Limpando filtro:
  const reset = ()=>{
    setSearchByName('')
    setSearchByDocument('')
    setSearchByPropost('')
  }

  // Filtrando os valores e atualizando o objeto da tabela:
  // Pesquisando nome do cliente:
  const searchName = (item)=>{
    let strFilter = item.toLowerCase()
    const res = rows.filter((row)=>{
      return row.name.toLowerCase().includes(strFilter)
    })
    setRowsCopy(res)
  }

  // Pesquisando CPF do cliente:
  const searchDocument = (item)=>{
    let strFilter = item
    const res = rows.filter((row)=>{
      const numberFormat = `${row.document}`
      return numberFormat.includes(strFilter)
    })
    setRowsCopy(res)
  }

  // Pesquisando número genérico:
  const searchPropost = (item)=>{
    let strFilter = item
    const res = rows.filter((row)=>{
      const numberFormat = `${row.propostNumber}`
      return numberFormat.includes(strFilter)
    })
    setRowsCopy(res)
  }

  const searchValue = ()=>{
    const min = searchByMinValue;
    const max = searchByMaxValue;
    console.log('minimo', min)
    console.log('maximo', max)
    const res = rows.filter((row)=>{
      console.log(row.amount)
      const currentAmount = row.amount
      return currentAmount >= min && currentAmount <= max
    })
    if(res.length != 0) return setRowsCopy(res)
  }

  
  // UseState separados porque são filtros diferentes:
  React.useEffect(()=>{
    searchName(searchByName)
    searchValue(searchByName)
  },[searchByName])
  
  React.useEffect(()=>{
    searchDocument(searchByDocument)
  },[searchByDocument])

  React.useEffect(()=>{
    searchPropost(searchByPropost)
  },[searchByPropost]) 

  React.useEffect(()=>{
    searchValue()
  },[searchByMinValue, searchByMaxValue]) 

  return (
    <Box>
      <ThemeProvider theme={DarkTheme}>
        <h2 style={{color: greenColor, fontSize: 20}}>Pesquise por:</h2>
        <Box sx={{width: '100%', height: 240, marginBottom: 5, backgroundColor: '#2a2929'}}>

          <Box sx={{width: '100%', height: 80, display: 'flex', flexDirection: 'row'}}>
            
            <Box sx={{width: '30%', height: '100%', padding:2}}>
              <h3>Nome:</h3>
              <input type="text" value={searchByName} style={{width: 300, height: 40, color: greenColor, outline: 0, backgroundColor: darkColor, borderRadius: 5}} onChange={(e)=>setSearchByName(e.target.value)}/>
            </Box>
            
            <Box sx={{width: '30%', height: '100%', padding:2}}>
              <h3>CPF:</h3>
              <input type="text" value={searchByDocument} style={{width: 300, height: 40, color: greenColor, outline: 0, backgroundColor: darkColor, borderRadius: 5}} onChange={(e)=>setSearchByDocument(e.target.value)}/>
            </Box>

            <Box sx={{width: '30%', height: '100%', padding:2}}>
              <h3>Número da proposta:</h3>
              <input type="text" value={searchByPropost} style={{width: 300, height: 40, color: greenColor, outline: 0, backgroundColor: darkColor, borderRadius: 5}} onChange={(e)=>setSearchByPropost(e.target.value)}/>
            </Box>
          </Box>

          <Box sx={{width: '100%', height: 80, display: 'flex', flexDirection: 'row'}}>
            <Box sx={{width: '30%', height: '100%', padding:2}}>
              <h3>Valor mínimo:</h3>
              <input type="number" value={searchByMinValue} style={{width: 300, height: 40, color: greenColor, outline: 0, backgroundColor: darkColor, borderRadius: 5}} onChange={(e)=>setSearchByMinValue(e.target.value)}/>
            </Box>
            <Box sx={{width: '30%', height: '100%', padding:2}}>
              <h3>Valor máximo:</h3>
              <input type="number" value={searchByMaxValue} style={{width: 300, height: 40, color: greenColor, outline: 0, backgroundColor: darkColor, borderRadius: 5}} onChange={(e)=>setSearchByMaxValue(e.target.value)}/>
            </Box>
          </Box>

          <Box sx={{width: '100%', height: 50, paddingLeft: 2, display: 'flex', flexDirection: 'row'}}>
            <Box sx={{width: '30%', height: '100%', display: 'flex', gap: 1, alignItems: 'flex-end'}}>
              <Button variant="contained" sx={{height: 30,color: whiteColor}}>Pesquisar</Button>
              <Button variant="contained" sx={{height: 30,color: whiteColor}} onClick={reset}>Limpar</Button>
            </Box>
          </Box>

        </Box>
        <Box sx={{ width: '100%' }} border={0}>
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
                rowCount={rowsCopy.length}
                />
                <TableBody>
                {rowsCopy.map((row) => {
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
              count={rowsCopy.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              sx={{backgroundColor: darkColorSecundary, color: whiteColor}}
              />
          </Paper>
          </Box>
      </ThemeProvider>
    </Box>
  );
}