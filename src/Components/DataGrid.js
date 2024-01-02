import React, { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';

export default function Orders({ data }) {

    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'user_name', headerName: 'Ordered By', width: 150 },
        { field: 'user_email', headerName: 'Email', width: 150 },
        { field: 'product_name', headerName: 'Product Name', width: 150 },
        { field: 'quantity', headerName: 'Quantity', width: 150 },
        { field: 'total_price', headerName: 'Total Price', width: 150 },
        { field: 'line_1', headerName: 'Line 1', width: 150 },
        { field: 'line_2', headerName: 'Line 2', width: 150 },
        { field: 'city', headerName: 'City', width: 150 },
        { field: 'state', headerName: 'State', width: 150 },
        { field: 'country', headerName: 'Country', width: 150 },
        { field: 'is_fulfilled', headerName: 'Fulfilled', width: 150 },
    ];

    const rows = data.map(order => ({
        id: order.id,
        user_name: order.user_name,
        user_email: order.user_email,
        product_name: order.product_name,
        quantity: order.quantity,
        total_price: parseFloat(order.product_price) * parseInt(order.quantity),
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
