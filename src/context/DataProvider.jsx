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

    const login = (email, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = usersProvider.find(
                    (u) => u.email === email && u.password === password
                )

                if (user) {
                    const token = btoa(`${user.email}:${user.role}`)
                    resolve({ token, user })
                } else {
                    reject(new Error('Credenciales inválidas'))
                }
            }, 1000)
        })
    }


    const saveAddress = (newListAddress, userId) => {
        setAddressesProvider(prev => {
            const others = prev.filter(addr => addr.userId !== userId)

            return [...others, ...newListAddress]
        })
    }




    const saveStudy = (newListStudies, userId) => {
        setStudiesProvider(prev => {
            const others = prev.filter(study => study.userId !== userId)

            return [...others, ...newListStudies]
        })
    }

    const updateUsersProviders = (newUser) => {
        setUsersProvider(prev =>
            prev.map(user => user.id === newUser.id ? newUser : user)
        );
    }


    useEffect(() => {
        if (usersProvider.length == 0) {
            reloadData()
        }
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
                saveAddress,
                saveStudy,
                updateUsersProviders,
                login
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)
