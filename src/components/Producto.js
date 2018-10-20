import React from 'react'
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { borrarProducto } from '../actions/productosActions';

class Producto extends React.Component {

	eliminarProducto = () => {
			const {id} = this.props.info;

			this.props.borrarProducto(id);
	}

	render () {
		const {id, nombre, precio} = this.props.info;
		return (
			<li className='list-group-item'>
				<div className='row justify-content-between align-items-center'>
						<div className='col-md-8 d-flex justify-content-between align-items-center'>
							<p className='text-dark m-0'>{nombre}</p>

						<span className='badge badge-warning text-dark'>$ {precio}</span>
						</div>
						<div className='col-md-4 d-flex justify-content-end acciones'>
							<Link to={`productos/editar/${id}`} className='btn btn-primary mr-2'>Editar</Link>
							<button onClick={this.eliminarProducto} type='button' className='btn btn-danger'>Borrar</button>
						</div>
				</div>
			</li>
		);
	}
}

export default connect(null, {borrarProducto}) (Producto);
