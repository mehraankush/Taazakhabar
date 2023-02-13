import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    container:{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor:'#3457D5',
        marginTop:'3rem',
        padding:'0 15px',
        width:'100%',
        fontFamily:'sans-serif',
    },
    footer:{
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    image:{
        width: '200px',
        height: '200px',
        padding: '1rem',
        borderRadius: '50%',
    },
    socials:{
        display: 'flex',
        justifyContent:'space-evenly',
        padding: '0 5rem',
        paddingBottom:'2rem',
        '@media (max-width: 400px)': {
            marginTop:'1rem',
            justifyContent:'space-between',
          }
    },
    icons:{
        height: '3rem',
        width: '1rem',
    },
    about:{
        padding: '0 5rem',
        '@media (max-width: 780px)': {
            padding: '0 3rem',
          },
        '@media (max-width: 400px)': {
            padding: '0 1rem',
          }
    },
    quote:{
      fontFamily: '',
      borderRadius: '5px',
    },
})