import React from 'react';

import { connect } from 'react-redux';
import { mostrarProducto, editarProducto } from '../actions/productosActions';

class EditarProducto extends React.Component {

	state = {
		nombre: '',
		precio: '',
		error: false
	}

	componentDidMount(){
		const { id } = this.props.match.params;
		this.props.mostrarProducto(id);
	}

	componentWillReceiveProps(nextProps, nextState){
		const { nombre, precio } = nextProps.producto;
		this.setState({nombre, precio});
	}

	nombreProducto = e => {
			this.setState({ nombre: e.target.value });
	}

	precioProducto = e => {
			this.setState({ precio: e.target.value });
	}

	actualizarProducto = e => {
		e.preventDefault();

		const { id } = this.props.match.params;
		const { nombre, precio } = this.state;

		if (nombre === '' || precio === '') {
			this.setState({error: true});
			return;
		}

		this.setState({error: false});

		const infoProducto = { id, nombre, precio }

		this.props.editarProducto(infoProducto);

		this.props.history.push('/');
	}

	render () {
		const {nombre, precio, error} = this.state;

		return (
				<div className="row justify-content-center mt-5">
					<div className="col-md-8">
							<div className="card">
									<div className="card-body">
											<h2 className="text-center">Agregar Nuevo Producto</h2>
											<form onSubmit={this.actualizarProducto}>
													<div className="form-group">
															<label>Titulo</label>
															<input defaultValue={nombre} onChange={this.nombreProducto} type="text" className="form-control" placeholder="Titulo" />
													</div>
													<div className="form-group">
															<label>Precio del Producto</label>
															<input defaultValue={precio} onChange={this.precioProducto} type="text" className="form-control" placeholder="Precio" />
													</div>
													<button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Guardar cambios</button>


													{ error ? (
															<div className="alert alert-danger mt-2" role="alert">
																		Todos los campos deben ser completados!
															</div>
														) : '' }
											</form>
									</div>
							</div>
					</div>
				</div>
		);
	}
}

const mapStateToProps = state => ({
	producto: state.productos.producto
})

export default connect(mapStateToProps, {mostrarProducto, editarProducto})(EditarProducto);
