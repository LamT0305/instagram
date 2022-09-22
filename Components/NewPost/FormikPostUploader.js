import {View, Text, Image, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import * as yup from 'yup';
import {yupToFormErrors} from 'formik';
import {Formik} from 'formik';
import {Divider} from 'react-native-elements';
const uploadPostSchema = yup.object().shape({
  imageUrl: yup.string().url().required('A URL is required'),
  caption: yup.string().max(2200, 'caption has reached the character limit'),
});

const PLACEHOLDER_IMG = 'https://via.placeholder.com/150';

const FormikPostUploader = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);
  return (
    <Formik
      initialValues={{caption: '', imageUrl: ''}}
      onSubmit={values => console.log(values)}
      validationSchema={uploadPostSchema}
      validateOnMount={true}>
      {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
        <>
          <View style={{margin: 10, flexDirection: 'row'}}>
            <Image
              source={{uri: thumbnailUrl ? thumbnailUrl : PLACEHOLDER_IMG}}
              style={{width: 100, height: 100}}
            />

            <TextInput
              placeholder="Write a caption"
              placeholderTextColor="gray"
              multiline={true}
              style={{color: 'black'}}
              onChangeText={handleChange('caption')}
              onBlur={handleBlur('caption')}
              value={values.caption}
            />
          </View>
          <Divider width={1} />
          <TextInput
            onChange={e => setThumbnailUrl(e.nativeEvent.text)}
            placeholder="Enter image Url"
            placeholderTextColor="gray"
            style={{color: 'black', marginLeft: 10}}
            onChangeText={handleChange('imageUrl')}
            onBlur={handleBlur('imageUrl')}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{fontSize: 15, color: 'red'}}>{errors.imageUrl}</Text>
          )}
          <View style={{alignItems:'center'}}>
          <View style={{width:'50%', alignItems:'center',}}>
            <Button title="Share" onPress={handleSubmit} disabled={!isValid} />
          </View>
          </View>
          
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;
