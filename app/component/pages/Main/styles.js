import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1,
    padding: 2,
    borderWidth: 1,
    borderColor: 'gray'
  },
  content: {
    flex: 12,
    borderWidth: 1,
    borderColor: 'gray'
  },

  /* List Item View */
  itemView: {
    width: '100%', 
    backgroundColor: '#FFF',
    borderRadius: 2,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,  
    elevation: 3,
    marginBottom: 8
  },
  descViewTxt: {
    fontSize: 14
  },
  licenseNumTxt: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  capacityView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  favoriteBtn: {
    marginRight: 8,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  capacityTxt: {
    fontSize: 14
  },
});

export default styles;