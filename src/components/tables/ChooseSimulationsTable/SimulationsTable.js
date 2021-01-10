import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useTable} from 'react-table';


const StyledLinkWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledLink = styled(Link)`
  color: #000;
  font-size: 15px;
  letter-spacing: 1px;
  text-decoration: none;
  text-align: center;
  &:hover {
    background-color: #62C370;
    color: #fff;
    border-radius: 5px;
    padding: 1px;
    }
`;

const TableWrapper = styled.div`
    width: 100%;
    align-items: center;
    min-width: 300px;
    font-size: 20px;
    color: #464e51;
    font-family: Montserrat,serif;
`;
const Styles = styled.div`
  padding: 1rem;
  table {
    border-spacing: 0;
    border: 0.5px solid #f4f4f4;
    border-radius: 10px;
    width: 100%;
  
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 0.5px solid #dadada;
      border-right: 0.5px solid #dadada;
      :last-child {
        border-right: 0;
      }
    }
  }
`;

const SimulationsTable = ({data}) => {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Simulations presets',
                columns: [
                    {
                        Header: 'Simulation name',
                        accessor: 'simulationName'
                    },
                    {
                        Header: 'Population',
                        accessor: 'population'
                    },
                    {
                        Header: 'Initial number of infected',
                        accessor: 'initialNumberOfInfected'
                    },
                    {
                        Header: 'Infection rate',
                        accessor: 'infectionRate'
                    },
                    {
                        Header: 'Mortality rate',
                        accessor: 'mortalityRate'
                    },
                    {
                      Header: 'Recovery time',
                      accessor: 'cureTime'
                    },
                    {
                        Header: 'Mortal time',
                        accessor: 'mortalTime'
                    },
                    {
                      Header: 'Simulation time',
                      accessor: 'simulationTime'
                    },
                    {
                        Header: 'Select preset',
                        accessor: '_id',
                        Cell: ({row: {values}}) => (
                            <StyledLinkWrapper>
                                <StyledLink
                                    onClick={() => console.log('link works')}
                                    to={{
                                        pathname: '/simulation',
                                        nameProps: {
                                            name: values.simulationName
                                        }
                                    }}>
                                    simulate
                                </StyledLink>
                            </StyledLinkWrapper>
                        )
                    }
                ]
            }
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    return (
        <TableWrapper>
            <Styles>
                <table {...getTableProps()}>
                    <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </Styles>
        </TableWrapper>

    )
};


export default SimulationsTable;