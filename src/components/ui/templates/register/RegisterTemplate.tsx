import RegisterForm from "../../organisms/register/RegisterForm";

export const RegisterTemplate = () => {
    return (
        <div className="min-h-screen flex  items-center justify-center bg-gray-100">
            <div className="w-full max-w-md  p-6 bg-white rounded-lg shadow-md">
                <p>Regístrate en nuestro salón</p>
                <RegisterForm />
            </div>
        </div>
    )
}