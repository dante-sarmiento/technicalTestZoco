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

    useEffect(() => {
      
        console.log("users", usersProvider)
    }, [usersProvider])
    
    
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

    const saveAddress = (newListAddress) => {
        const existingIds = addressesProvider.map(a => a.id)
        const newIds = newListAddress.map(a => a.id)

        newListAddress.forEach(addr => {
            if (existingIds.includes(addr.id)) {
                updateAddress(addr)
            } else {
                addAddress(addr)
            }
        })

        addressesProvider.forEach(addr => {
            if (!newIds.includes(addr.id)) {
                deleteAddress(addr.id)
            }
        })
    }

    const saveStudy = (newListStudies) => {
        const existingIds = studiesProvider.map(s => s.id)
        const newIds = newListStudies.map(s => s.id)

        newListStudies.forEach(study => {
            if (existingIds.includes(study.id)) {
                updateStudy(study)
            } else {
                addStudy(study)
            }
        })

        studiesProvider.forEach(study => {
            if (!newIds.includes(study.id)) {
                deleteStudy(study.id)
            }
        })
    }

    const updateUsersProviders = (newUser) => {
        setUsersProvider(prev =>
            prev.map(user => user.id === newUser.id ? newUser : user)
        );
    }


    useEffect(() => {
        if(usersProvider.length == 0) {
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
