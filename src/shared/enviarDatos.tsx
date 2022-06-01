export const enviarDatos = async (event: React.FormEvent<HTMLFormElement>, loginErrors: any, setLoginErrors: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userName: any = data.get('user');
    const res: any = await fetch('https://jsonplaceholder.typicode.com/users?username=' + userName, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const resUser: any = await res.json();
    console.log({
        user: data.get('user'),
        password: data.get('password'),
        loginErrors
    });
    if (resUser) {
        setLoginErrors({
            message: 'Logueado Correctamente...'
        });
        console.log(
            resUser,
            loginErrors
        );
        /**
         * usar enviar datos como otra funcion para usar en useEffect y crear 
         * otra para setear los datos de user desde onSubmit.
         */
    }
}