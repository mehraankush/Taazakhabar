import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    container:{
        display: 'flex',
        width: '100%',
        position:'sticky',
        backgroundColor:'rgba(245, 245, 245,0.5)',
        backdropFilter: 'blur(7px)',
    },
    logo:{
        height:'6rem',
        width:'8rem',
    }
})


