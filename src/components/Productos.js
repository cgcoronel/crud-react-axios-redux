import React from 'react';

import { connect } from 'react-redux';
import { mostrarProductos } from '../actions/productosActions';
import Producto from '../components/Producto';


class Productos extends React.Component {

	componentDidMount(){
			this.props.mostrarProductos();
	}

	render () {

		const { productos } = this.props;

		return (
			<React.Fragment>
					<h2 className='text-center my-5'>Listado de Productos</h2>

					<div className='row justify-content-center'>
							<div className='col-md-8'>
									<ul>
									{ productos.map(producto => (
											<Producto
												key={producto.id}
												info={producto}
											/>
									)) }
									</ul>
							</div>
					</div>

			</React.Fragment>
		);
	}
}

const mapsStateToProps = state => ({
	productos: state.productos.productos
});

export default connect(mapsStateToProps, { mostrarProductos })(Productos);
