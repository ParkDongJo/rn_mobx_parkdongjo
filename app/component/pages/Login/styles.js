import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  content: {
    flex: 1,
    backgroundColor: "#FFF"
  },

  introView: {
    flex: 1.5,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderWidth: 1
  },

  inputView: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1,
    padding: 10
  },
  label: {
    height: 30,
    marginTop: 2,
    marginBottom: 2,
    flexDirection: 'column',
    justifyContent: "center"
  },
  input: {
    height: 50, 
    borderColor: 'gray', 
    borderWidth: 1
  },

  btnView: {
    flex: 0.6,
    borderWidth: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 10
  },
  defBtn: {
    marginTop: 5,
    marginBottom: 5,
    borderColor: 'gray', 
    borderWidth: 1
  },
  loginBtn: {
 
  },
  findPwdBtn: {

  },
  title: {

  },
});

export default styles;