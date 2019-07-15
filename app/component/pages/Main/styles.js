import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  /* Main View */
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  header: {
    height: 48
  },
  content: {
    flex: 12,
    flexDirection: 'column',
  },

  /* List Item View */
  itemView: {
    height: 112, 
    backgroundColor: '#FFF',
    borderRadius: 2,
    padding: 16,
    shadowColor: 'rgba(0, 0, 0, 0.6)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,  
    elevation: 3,
    marginBottom: 8,
    borderRadius: 2,
    marginLeft: 8,
    marginRight: 8
  },
  descViewTxt: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0,
    color: 'rgba(0, 0, 0, 0.60)'
  },
  licenseNumTxt: {
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: 0,
    paddingTop: 6,
    paddingBottom: 6,
    color: 'rgba(0, 0, 0, 0.87)'
  },
  capacityView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  favoriteBtn: {
    marginRight: 8,
  },
  capacityTxt: {
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0,
    color: 'rgba(0, 0, 0, 0.60)'
  },
});

export default styles;