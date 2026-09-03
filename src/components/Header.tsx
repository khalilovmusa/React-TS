type HeaderProps = {
   children: string
}
export const Header = ({children}:HeaderProps) => {
   return <h2>{children}</h2>
}