'use strict';

const URL_PRODUCTOS = 'http://localhost:3000/Productos/';

addEventListener('DOMContentLoaded', async () => {
    fichas();
});

function ver(seccion) {
    document.querySelectorAll('main>section').forEach(section => section.style.display = 'none');
    document.getElementById(seccion).style.display = 'block';
}

async function fichas() {
    const respuesta = await fetch(URL_PRODUCTOS);

    console.log(respuesta);

    const productos = await respuesta.json();

    console.log(productos);

    const divFichas = document.querySelector('#fichas>div');

    divFichas.innerHTML = '';

    productos.forEach(producto => {
        console.log(producto);

        const col = document.createElement('div');

        col.className = 'col';

        col.innerHTML =
            `
                <div class="card h-100">
                    <img src="https://picsum.photos/400/300?${producto.id}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">${producto.precio}</small>
                    </div>
                </div>
            `;

        divFichas.appendChild(col);
    });

    ver('fichas');
}


async function admin() {
    const respuesta = await fetch(URL_PRODUCTOS);

    console.log(respuesta);

    const productos = await respuesta.json();

    console.log(productos);

    const tbody = document.querySelector('#admin tbody');

    tbody.innerHTML = '';

    productos.forEach(producto => {
        console.log(producto);

        const tr = document.createElement('tr');

        tr.innerHTML =
            `
                <td>${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>${producto.descripcion}</td>
                <td>${producto.precio}</td>
                <td>${producto.stock}</td>
                <td>
                    <a href="javascript:formulario(${producto.id})" class="btn btn-primary">Editar</a>
                    <a href="javascript:eliminar(${producto.id})" class="btn btn-danger">Eliminar</a>
                </td>
            `;
        const totalProductos = document.querySelector('tfoot td:nth-child(2)');
        totalProductos.textContent = productos.length;
        tbody.appendChild(tr);
    });

    ver('admin');
}

async function formulario(id) {
    const form = document.querySelector('#formulario form');

    if (id) {
        const respuesta = await fetch(URL_PRODUCTOS + id);
        const producto = await respuesta.json();

        console.log(producto);

        form.idproducto.value = producto.id;
        form.nombre.value = producto.nombre;
        form.precio.value = producto.precio;
        form.descripcion.value = producto.descripcion;
        form.stock.value = producto.stock;
    } else {
        form.reset();
    }

    ver('formulario');
}

async function crearNuevo() {
    const producto = {
        nombre: document.querySelector("#nombre").value,
        descripcion: document.querySelector("#descripcion").value,
        precio: document.querySelector("#precio").value,
        stock: document.querySelector("#stock").value
    }

    const respuesta = await fetch(URL_PRODUCTOS, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(producto)
    });
    const productoCreado = await respuesta.json(); //Por si lo necesitamos
    if (respuesta.ok) {
        admin();
    } else {
        alert('Error');
    }
}

async function guardar() {

    if (!document.querySelector("#idproducto").value) {
        crearNuevo();
    } else {
        const producto = {
            id: document.querySelector("#idproducto").value,
            nombre: document.querySelector("#nombre").value,
            descripcion: document.querySelector("#descripcion").value,
            precio: document.querySelector("#precio").value,
            stock: document.querySelector("#stock").value
        }

        const respuesta = await fetch(URL_PRODUCTOS + id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(producto)

        });
        const productoActualizado = await respuesta.json(); //Por si lo necesitamos
        if (respuesta.ok) {
            admin();
        } else {
            alert('Error');
        }
    }


}

async function eliminar(id) {
    const respuesta = await fetch(URL_PRODUCTOS + id, {
        method: 'DELETE'
    });
    const productoEliminado = await respuesta.json(); //Por si lo necesitamos
    if (respuesta.ok) {
        admin();
    } else {
        alert('Error');
    }
}