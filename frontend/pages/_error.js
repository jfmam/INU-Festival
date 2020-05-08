import Error from 'next/error';

const AppError= (props=>{
    return(
        <>
        <h1>잘못 된 접근입니다.</h1>
        <Error statusCode={props.statusCode}/>
        </>
    )
})

AppError.getInitialProps=async(context)=>{
    const statusCode=context.res?context.res.statusCode:condext.errr?context.err.statusCode:null;
    return statusCode;
}
export default AppError;