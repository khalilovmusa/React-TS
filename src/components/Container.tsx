type ContainterProps = {
   styles: React.CSSProperties
}

export const Container = (props: ContainterProps) => {
   return(
      <div style={props.styles}>
         Text content or children goes here
      </div>
   )
}