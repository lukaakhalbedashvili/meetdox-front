import * as Yup from 'yup'
import { TeacherEducationInfoValidationForm } from '../TeacherEducation/TeacherEducationFormSection/teacherEducation.interface'

export enum EducationValidationKeys {
  TEACHER_EDUCATION0 = 'teacherEducation0',
  TEACHER_EDUCATION1 = 'teacherEducation1',
  TEACHER_EDUCATION2 = 'teacherEducation2',
}

export const generateEducationValidationObjects = () => {
  type ObjectSchema = Yup.ObjectSchema<
    TeacherEducationInfoValidationForm | undefined,
    Yup.AnyObject,
    '',
    ''
  >

  interface EduValidations {
    teacherEducation0: ObjectSchema
    teacherEducation1: ObjectSchema
    teacherEducation2: ObjectSchema
  }

  let eduValidations = {
    teacherEducation0: {},
    teacherEducation1: {},
    teacherEducation2: {},
  }

  for (let key in eduValidations) {
    const object = {
      arraySchema: Yup.object().shape({
        university: Yup.string().required('required'),
        major: Yup.string().required('required'),
        startDate: Yup.string().required('required'),
        endDate: Yup.string().required('required'),
        id: Yup.number().required(),
      }),
    }

    eduValidations[key as keyof EduValidations] = object.arraySchema!
  }
  return eduValidations as EduValidations
}
