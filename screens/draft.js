
<Picker 
mode={'dropdown'}
dropdownIconColor={'blue'}
    /* selectedValue={discipline}
    style={{height: 50, width: 100}}
    onValueChange={(itemValue, itemIndex) =>
    setDiscipline(itemValue)
} */
style={styles.picker}
>
    <Picker.Item label="Выберите предмет" value="" />
    <Picker.Item label="математика" value="математика" />
    <Picker.Item label="русский язык и литература" value="русский язык и литература" />
</Picker>
<Picker
    /* selectedValue={classNumber}
    style={{height: 50, width: 100}}
    onValueChange={(itemValue, itemIndex) =>
    setclassNumber(+itemValue)
} */
style={styles.picker}
>
    <Picker.Item label="Выберите класс" value="" />
    <Picker.Item label="1 класс" value="1" />
    <Picker.Item label="2 класс" value="2" />
    <Picker.Item label="3 класс" value="3" />
</Picker>
