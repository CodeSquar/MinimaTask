function Overflow(props){
    const {children,content} = props
    return(
        <div className={!content.length > 0 ? 'tasks-scroll-container-disabled' : 'tasks-scroll-container'}>
            {children}
        </div>
    )
}
export default Overflow