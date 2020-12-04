import React from 'react';
import { StyleSheet, Text, TextInput, ScrollView, View, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import RNPickerSelect from 'react-native-picker-select';
import Header from '../components/Header';
import Footer from '../components//Footer';
import CompetenceBlock from '../components/CompetenceBlock';
import RatingItem from '../components/RatingItem';

import { changeRatingData, resetRatingData, postRatingData }  from '../store/actions/ratingData';

import Colors from '../constants/Colors';

import teachers from '../data/teachers';


const pickerStyle = {
  placeholderColor: '#000', 
  inputIOS: { color: '#000' },
  inputAndroid: { color: '#000'}
};


const RateScreen = props => {

    const dispatch = useDispatch();

    let discipline = useSelector(state => state.ratingData[discipline]);
    let classNumber = useSelector(state => state.ratingData[classNumber]);
    let typeOfRating = useSelector(state => state.ratingData[typeOfRating]);
    let themeOfLesson = useSelector(state => state.ratingData[themeOfLesson]);
  
    const teacherId = props.navigation.getParam('teacherId');
    const selectedTeacher = teachers.find(teacher => teacher.id === teacherId)

    const changeRatingDataHandler = (criterion, value) => {
      dispatch(changeRatingData(criterion, value))
    }

    /* const resetRatingDataHandler = () => {
      dispatch(resetRatingData())
    } */
    
    let data = useSelector(state => state.ratingData);
    const postRatingDataHandler = () => {
      try {
        dispatch(postRatingData(data, selectedTeacher.id));
        dispatch(resetRatingData());
      } catch(err) {
        Alert.alert('Ошибка', err, [{text: 'Ok'}]);
      }
    }

    return (
        <View style={styles.screen}>
            <Header text={selectedTeacher.name}/>
            <View style={styles.main}>
            <ScrollView>
              <View style={styles.card}>
                <View style={styles.pickerWrapper}>
                  <RNPickerSelect
                        placeholder={{ label: 'Выберите предмет', value: 'null' }}
                        style={pickerStyle}
                        value={discipline}
                        onValueChange={value => {
                          changeRatingDataHandler('discipline', value);
                        }}
                        items={[
                            { label: 'математика', value: 'математика' },
                            { label: 'русский язык и литература', value: 'русский язык и литература' }
                        ]}
                    />
                </View>
                <View style={styles.pickerWrapper}>
                  <RNPickerSelect
                    placeholder={{ label: 'Выберите класс', value: 'null' }}
                    style={pickerStyle}
                    value={classNumber}
                    onValueChange={value => {
                      changeRatingDataHandler('classNumber', value);
                    }}
                    items={[
                        { label: '1-й класс', value: '1' },
                        { label: '2-й класс', value: '2' },
                        { label: '3-й класс', value: '3' },
                        { label: '4-й класс', value: '4' },
                        { label: '5-й класс', value: '5' },
                        { label: '6-й класс', value: '6' },
                        { label: '7-й класс', value: '7' },
                        { label: '8-й класс', value: '8' },
                        { label: '9-й класс', value: '9' },
                        { label: '10-й класс', value: '10' },
                        { label: '11-й класс', value: '11' }
                    ]}
                  />
                </View>
                <View style={styles.pickerWrapper}>
                      <RNPickerSelect
                      placeholder={{ label: 'Выберите тип оценки', value: 'null' }}
                      style={pickerStyle}
                      value={typeOfRating}
                      onValueChange={value => {
                          changeRatingDataHandler('typeOfRating', value)
                        }
                      }
                      items={[
                          { label: 'Внутришкольная оценка', value: 'Внутришкольная оценка' },
                          { label: 'Внешняя оценка', value: 'Внешняя оценка' }
                      ]}
                    />
                </View>
                <TextInput 
                  style={styles.pickerWrapper}
                  placeholder={'Напишите тему урока'} 
                  value={themeOfLesson}
                  onChangeText={value => {
                    changeRatingDataHandler('themeOfLesson', value);
                  }}
                />
              </View>
              <View style={styles.ratingSection}>
                  <View style={styles.criteriaMainHeadingCard}>
                  <Text style={styles.criteriaMainHeadingTop}>Критерии оценки урока</Text>
                    <Text style={styles.criteriaMainHeading}>
                      <Text style={styles.criteriaMainHeadingNumber}>2</Text> – требование выполнено на оптимальном уровне{'\n'}
                      <Text style={styles.criteriaMainHeadingNumber}>1</Text> – есть резервы{'\n'}
                      <Text style={styles.criteriaMainHeadingNumber}>0</Text> – требование практически не выполнено{'\n'}
                    </Text>
                  </View>
                  <View style={styles.card}>
                    <CompetenceBlock heading={'1. Предметно-методическая компетенция'} 
                      items={[{text: '1.1 Требования Стандартов к предметному содержанию', criterion: 'c1'}, 
                              {text: '1.2. Развитие личностной сферы ученика средствами предмета]', criterion: 'c2'}, 
                              {text: '1.3. Использование заданий, развивающих УУД на уроках предмета', criterion: 'c3'}
                            ]}/>
                  </View>
                  <View style={styles.card}>
                    <CompetenceBlock heading={'2. Психолого-педагогическая компетенция'} 
                      items={[{text: '2.1. Учет и развитие мотивации и психофизиологической сферы учащихся', criterion: 'c4'},
                              { text: '2.2. Обеспечение целевой психолого-педагогической поддержки обучающихся', criterion: 'c5'}
                            ]}
                      />   
                  </View> 
                  <View style={styles.card}>
                    <CompetenceBlock heading={'3. Валеологическая компетенция'} 
                      items={[{text: '3.1. Требования ЗСС в содержании, структуре урока, в работе с оборудованием и учете данных о детях с ОВЗ', criterion: 'c6'}]}
                    />   
                  </View> 
                  <View style={styles.card}>
                    <CompetenceBlock heading={'4.Коммуникативная компетенция'} 
                      items={[{text: '4.1. Стиль и формы педагогического взаимодействия на уроке', criterion: 'c7'}]}
                    />   
                  </View> 
                  <View style={styles.card}>
                    <CompetenceBlock heading={'5. Управленческая компетенция'} 
                      items={[{text: '5.1.Управление организацией учебной деятельности обучающихся через систему оценивания', criterion: 'c8'},
                              {text: '5.2. Управление собственной обучающей деятельностью', criterion: 'c9'}]}
                    />   
                  </View> 
             </View>
            <RatingItem style={styles.criteriaMainHeadingTop} text='Результативность урока' criterion='efficiency' />
              <TouchableOpacity 
                style={styles.rateButton}
                onPress={() => postRatingDataHandler()}
              >
                <Text style={styles.rateButtonText}>Оценить</Text>
              </TouchableOpacity>
            </ScrollView>
            </View>
            
            <Footer />
        </View>
    )
}

RateScreen.navigationOptions = {
    headerTitle: 'Оценить' 
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    minHeight: '100%'
  },

  main: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF',
    paddingVertical: 20,
    paddingTop: 15
  },

  tableHeading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: Colors.darkblue
  },

  card:{
    backgroundColor: '#FFF',
    marginVertical: 16,
    width: '90%',
    paddingVertical: 20,
    paddingHorizontal: 16,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowColor: 'rgba(0,0,130,0.5)',
    borderRadius: 5,
    alignSelf: 'center',
    alignItems: 'center',
    elevation: 1,
  },

  ratingSection: {
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
    paddingVertical: 20
  },

  pickerWrapper: {
    width: '80%',
    /* fontSize: 20, */
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
    marginBottom: 16,
  },

  picker: {
    fontSize: 18,
    color: '#000'
  },

  criteriaMainHeadingCard: {
    width: '90%',
    backgroundColor: '#FFF',
    padding: 16,
    paddingBottom: 0,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowColor: 'rgba(0,0,130,0.5)',
    borderRadius: 5,
    marginBottom: 26,
    elevation: 1
  },

  criteriaMainHeading: {
    fontSize: 16,
    lineHeight: 24,
    backgroundColor: '#FFF',
  },

  criteriaMainHeadingNumber: {
    color: Colors.darkblue,
    fontWeight: 'bold',
    fontSize: 19,
  },  

  criteriaMainHeadingTop: {
    color: Colors.darkblue,
    fontWeight: 'bold',
    fontSize: 20,
    width: '100%',
    marginBottom: 16,
    textAlign: 'center'
  },

  rateButton: {
    width: 120,
    backgroundColor: Colors.darkblue,
    color: '#FFF',
    paddingVertical: 13,
    alignSelf: 'center'
  },

  rateButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17
  }
});

export default RateScreen;