import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  /* Login View */
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  content: {
    flex: 1,
    backgroundColor: "#FFF"
  },

  /* Intro View */
  introView: {
    flex: 2.6,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  introImg: {
    width: 120, 
    height: 120, 
    borderRadius: 4,
    marginBottom: 21,
    backgroundColor: 'rgba(0, 0, 0, 0.18)'
  },

  /* Login Input View */
  inputView: {
    flex: 4,
    flexDirection: 'column',
    marginLeft: 32,
    marginRight: 32,
  },
  label: {
    height: 24,
    paddingBottom: 6,
    flexDirection: 'column',
    justifyContent: "center"
  },
  labelTxt: {
    height: 18,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  input: {
    height: 48, 
    padding: 10,
    borderColor: 'rgba(0, 0, 0, 0.18)', 
    borderWidth: 1,
    borderRadius: 4
  },
  pwdInput: {
    marginTop: 16,
  },
  checkView: {
    marginTop: 17,
    flexDirection: 'row', 
    justifyContent: 'flex-start',
    height: 36,
  },

  /* Login Button View */
  btnView: {
    marginTop:61,
  },
  defBtn: {
    height: 48,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtn: {
    backgroundColor: "#00bc45",
  },
  findPwdBtn: {
    marginTop: 8,
    borderColor: 'rgba(0, 0, 0, 0.18)', 
    borderWidth: 1,
  },
  findPwdTxt: {
    fontSize: 16,
    color: "#00bc45"
  },
  loginTxt: {    
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.87)', 
  },
});

export default styles;