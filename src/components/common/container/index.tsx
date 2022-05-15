import Styles from "./styles"

type ContainerProps  = {
    style?: Object;
    children: React.ReactNode;
}

const Container = ({style, children}: ContainerProps) => {
    return (
        <div style={{...Styles.Wrapper, ...style}} data-testid="c1">
            {children}
        </div>
    )
}

export default Container 