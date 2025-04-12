import { createContext, useContext, useEffect, useState } from 'react'

// Api

// API mocks
import { getUsers } from '../api/users';
import { getAddresses } from '../api/address';
import { getStudies } from '../api/studies';

const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [addressesProvider, setAddressesProvider] = useState([]);
    const [studiesProvider, setStudiesProvider] = useState([])
    const [usersProvider, setUsersProvider] = useState([])

    const reloadData = async () => {
        try {
            const [users, addresses, studies] = await Promise.all([
                getUsers(),
                getAddresses(),
                getStudies()
            ]);

            setUsersProvider(users)
            setAddressesProvider(addresses)
            setStudiesProvider(studies)
        } catch (error) {
            console.error('Error cargando datos:', error)
        }
    };

    const updateAddress = (updatedAddress) => {
        setAddressesProvider(prev =>
            prev.map(addr => addr.id === updatedAddress.id ? updatedAddress : addr)
        );
    };

    const addAddress = (newAddress) => {
        setAddressesProvider(prev => [...prev, newAddress]);
    };

    const deleteAddress = (id) => {
        setAddressesProvider(prev => prev.filter(addr => addr.id !== id));
    };

    const updateStudy = (updatedStudy) => {
        setStudiesProvider(prev =>
            prev.map(study => study.id === updatedStudy.id ? updatedStudy : study)
        );
    };

    const addStudy = (newStudy) => {
        setStudiesProvider(prev => [...prev, newStudy]);
    };

    const deleteStudy = (id) => {
        setStudiesProvider(prev => prev.filter(study => study.id !== id));
    };

    useEffect(() => {
        reloadData()
    }, []);

    return (
        <DataContext.Provider
            value={{
                usersProvider,
                setUsersProvider,
                addressesProvider,
                setAddressesProvider,
                studiesProvider,
                setStudiesProvider,
                reloadData,
                updateAddress,
                updateStudy,
                addStudy,
                addAddress,
                deleteAddress,
                deleteStudy
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)
