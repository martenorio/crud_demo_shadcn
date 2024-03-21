import { cn } from "@/lib/utils"
import { ContainerInfo } from "../components/ContainerInfo"
import { ContainerLogin } from "../components/ContainerLogin";


export const Login = () => {
  return (
    <div className={classConteiner}>
      <ContainerInfo />
      <ContainerLogin />
    </div>
  )
}

const classConteiner = cn("container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0");