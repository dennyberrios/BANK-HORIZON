import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import Saldo from '../views/Saldo';
import Deposito from '../views/Deposito';
import Layout from '../components/Layout';
import NotFoundPage from '../views/NotFoundPage';
import SelecaoDeClientes from '../views/SelecaoDeClientes';

const RoutersApp = () => {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/selecao-de-clientes' element={<SelecaoDeClientes />} />
                    <Route path='/painel/saldo/:id' element={<Saldo />} />
                    <Route path='/painel/deposito/:id' element={<Deposito />} />
                </Route>
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default RoutersApp;