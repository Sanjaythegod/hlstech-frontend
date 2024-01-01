import React from "react";
import { DataGrid } from '@mui/x-data-grid';

export default function Orders({ data }) {
    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'user_id', headerName: 'User ID', width: 150 },
        { field: 'product_id', headerName: 'Product ID', width: 150 },
        { field: 'quantity', headerName: 'Quantity', width: 150 },
        { field: 'line_1', headerName: 'Line 1', width: 150 },
        { field: 'line_2', headerName: 'Line 2', width: 150 },
        { field: 'city', headerName: 'City', width: 150 },
        { field: 'state', headerName: 'State', width: 150 },
        { field: 'country', headerName: 'Country', width: 150 },
        { field: 'is_fulfilled', headerName: 'Fulfilled', width: 150 },
    ];


    const rows = data.map(order => ({
        id: order.id,
        user_id: order.user_id,
        product_id: order.product_id,
        quantity: order.quantity,
        line_1: order.line_1,
        line_2: order.line_2,
        city: order.city,
        state: order.state,
        country: order.country,
        is_fulfilled: order.is_fulfilled,
    }));

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid columns={columns} rows={rows} pageSize={5} />
        </div>
    );
}
