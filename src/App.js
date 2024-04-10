import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const data = [
  { id: 1, name: 'a', age: 10 },
  { id: 2, name: 'b', age: 11 },
  { id: 3, name: 'cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc', age: 12 },
  { id: 4, name: 'd', age: 13 },
  { id: 5, name: 'e', age: 14 },
  { id: 6, name: 'f', age: 15 },
  { id: 7, name: 'g', age: 16 },
  { id: 8, name: 'h', age: 17 },
  { id: 9, name: 'i', age: 18 },
  { id: 10, name: 'j', age: 19 },
  { id: 11, name: 'k', age: 20 },
  { id: 12, name: 'l', age: 21 },
  { id: 13, name: 'm', age: 22 },
  { id: 14, name: 'n', age: 23 },
  { id: 15, name: 'o', age: 24 },
  { id: 16, name: 'p', age: 25 },
  { id: 17, name: 'q', age: 26 },
  { id: 18, name: 'r', age: 27 },
  { id: 19, name: 's', age: 28 },
  { id: 20, name: 't', age: 29 },
  { id: 21, name: 'u', age: 30 },
  { id: 22, name: 'v', age: 31 },
];

const renderRows = () => {
  const rows = [];
  const totalPages = Math.ceil(data.length / 10);
  
  for (let i = 0; i < data.length; i += 10) {
    const chunk = data.slice(i, i + 10);
    const pageNumber = Math.ceil((i + 1) / 10);
    
    rows.push(
      <Page key={i} size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
      <View style={styles.pageOneStyle}>
      {pageNumber === 1 && (
        <View style={styles.additionalInfoFirstPage}>
        <Text>Date: 01/01/2022</Text>
        <Text>Delivery Date: 01/10/2022</Text>
        <Text>Currency: USD</Text>
        <Text>Shipping Method: Air Freight</Text>
        <Text>Delivery Terms: FOB</Text>
        </View>
      )}
        {pageNumber === 1 && (
        <View style={styles.contactDetails}>
          <Text>Category:</Text>
          <Text >
          Category 1{"\n"}
          Category 2{"\n"}
          Category 3{"\n"}
          </Text>
          <Text>Contact:</Text>
          <Text>Contact 1</Text>
          <Text>Contact 2</Text>
          <Text>Contact 3</Text>
          <Text>Email:</Text>
          <Text>email1@example.com</Text>
          <Text>email2@example.com</Text>
          <Text>email3@example.com</Text>
        </View>
        )}
      </View>
      <View style={styles.table}>
        <View style={styles.row}>
        <Text style={styles.headerCell}>ID</Text>
        <Text style={styles.headerCell}>Name</Text>
        <Text style={styles.headerCell}>Age</Text>
        </View>
        {chunk.map(item => (
        <View style={styles.row} key={item.id}>
          <Text style={styles.cell}>{item.id}</Text>
          <Text style={styles.cell}>{item.name}</Text>
          <Text style={styles.cell}>{item.age}</Text>
        </View>
        ))}
      </View>
    
      <View style={styles.footer}>
        <View style={styles.additionalInstructions}>
        {pageNumber === totalPages && (
          <Text>
          Additional Instructions:{"\n"}
          Instructions go here{"\n"}
          {"\n"}
          Shipping Instructions:{"\n"}
          Shipping instructions go here{"\n"}
          For any queries please email: example@example.com
        </Text>
        )}
        </View>
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `Page ${pageNumber} of ${totalPages}`
        )} fixed />
        <View style={styles.footerLine} />
        <Text style={styles.footerText} fixed>
        COMPANY NAME{"\n"}
        Address: 123 Main St, City, State{"\n"}
        Telephone: 123-456-7890{"\n"}
        Company Registration No.: 12345678{"\n"}
        VAT Registration Number: 987654321
        </Text>
      
      </View>
      </Page>
    );
  }
  return rows;
};

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    padding: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  additionalInstructions: {
    fontSize: 10,
    textAlign: 'center',
    marginBottom: 5,
  },
  headerCell: {
    flex: 1,
    padding: 5,
    fontWeight: 'bold',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderColor: '#333',
    backgroundColor: 'lightblue',
  },
  footerText: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 10,
  },
  pageOneStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  pageNumber: {
    fontSize: 8,
    color:'blue',
  },
  additionalInfoFirstPage: {
    textAlign: 'left',
    fontSize: 10,

  },
  footerLine: {
    borderTopWidth: 2,
    borderTopColor: 'blue',
    marginTop: 10,
  },
  contactDetails: {
    textAlign:'right',
    fontSize: 10,
   
  },
});



const PDFDocument = () => (
  <PDFViewer width="100%" height="800px">
    <Document>
      {renderRows()}
    </Document>
  </PDFViewer>
);

export default PDFDocument;
