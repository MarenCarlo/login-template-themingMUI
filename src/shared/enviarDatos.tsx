/**
 * Funcion de llamada a la Api "callApi", esta esta exportada, para que pueda ser
 * utilizada desde nuestro componente Login().
 */
export const callApi = async (user: any, setUser: any, userData: any, setUserData: any, loginErrors: any, setLoginErrors: any,
                                isLogged:any, setLogged:any, isAdmin:any, setAdmin:any) => {

    /**
     * variable para recibir el state del username ingresado en el input
     * de name="user".
     */
    const userName: string = user.user;
    const userPass: string = user.password;
    setUser({
        user: '',
        password: ''
    })
    /**
     * Llamada a nuestra Api, concatenando la variable que contiene nuestro Username al final
     * para así obtener solo los datos de este mismo, y posteriormente almacenar la respuesta del servidor
     * en una variable.
     */
    const res: any = await fetch('https://jsonplaceholder.typicode.com/users?username=' + userName, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const resUser: any = await res.json();

    /**
     * Condicional que valida si el resultado de la llamada a la API
     * no esta vacia (Que no encontro ningun Usuarios)
     */
    if (resUser.length > 0) {
        const userApiPass: string = resUser[0].email;

        if (userPass === userApiPass) {

            /**
             * SetUserData nos sirve para almacenar toda la data que recibimos
             * del usuario que quiere ingresar al sistema.
             */
            setUserData({
                id: resUser[0].id,
                name: resUser[0].name,
                username: resUser[0].username,
                email: resUser[0].email,
                address: {
                    street: resUser[0].address.street,
                    suite: resUser[0].address.suite,
                    city: resUser[0].address.city,
                    zipcode: resUser[0].address.zipcode,
                    geo: {
                        lat: resUser[0].address.geo.lat,
                        lng: resUser[0].address.geo.lng,
                    }
                },
                phone: resUser[0].phone,
                website: resUser[0].website,
                company: {
                    name: resUser[0].company.name,
                    catchPhrase: resUser[0].company.catchPhrase,
                    bs: resUser[0].company.bs,
                }
            })

            const userIsAdmin: string = resUser[0].company.name; 
            if(userIsAdmin === 'Romaguera-Crona'){
                setAdmin(true);
                setLogged(true);
                setLoginErrors({
                    message: 'Logueado Correctamente...'
                });
            }else{
                setLoginErrors({
                    message: 'Este usuario no es Administrador...'
                });
            }

            /**Romaguera-Crona
             * Vaciado de State para ahorro de Memoria.
             */
            
        } else {
            setLoginErrors({
                message: 'La contraseña es Incorrecta...'
            });
        }
        /**
         * Si la peticion esta vacia seteara el estado de LoginErrors para
         * dar a entender que no se encontro ese usuario en la Base De Datos.
         */
    } else {
        setLoginErrors({
            message: 'No existe ningun Usuario con este nombre de usuario...'
        });
    }
}

