import * as Yup from 'yup'
import { TeacherEducationInfoValidationForm } from '../TeacherEducation/TeacherEducationFormSection/teacherEducation.interface'
import { TeacherExperienceForm } from '../TeacherExperience/TeacherExperienceFormSection/teacherExperience.interface'

export enum EducationValidationKeys {
  TEACHER_EDUCATION0 = 'teacherEducation0',
  TEACHER_EDUCATION1 = 'teacherEducation1',
  TEACHER_EDUCATION2 = 'teacherEducation2',
  TEACHER_EDUCATION3 = 'teacherEducation3',
  TEACHER_EDUCATION4 = 'teacherEducation4',
  TEACHER_EDUCATION5 = 'teacherEducation5',
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
    teacherEducation3: ObjectSchema
    teacherEducation4: ObjectSchema
    teacherEducation5: ObjectSchema
  }

  let eduValidations = {
    teacherEducation0: {},
    teacherEducation1: {},
    teacherEducation2: {},
    teacherEducation3: {},
    teacherEducation4: {},
    teacherEducation5: {},
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

export enum ExperienceValidationKeys {
  TEACHER_EXPERIENCE0 = 'teacherExperience0',
  TEACHER_EXPERIENCE1 = 'teacherExperience1',
  TEACHER_EXPERIENCE2 = 'teacherExperience2',
  TEACHER_EXPERIENCE3 = 'teacherExperience3',
  TEACHER_EXPERIENCE4 = 'teacherExperience4',
  TEACHER_EXPERIENCE5 = 'teacherExperience5',
}

export const generateExperienceValidationObjects = () => {
  type ObjectSchema = Yup.ObjectSchema<
    TeacherExperienceForm | undefined,
    Yup.AnyObject,
    '',
    ''
  >

  interface ExperienceValidations {
    teacherExperience0: ObjectSchema
    teacherExperience1: ObjectSchema
    teacherExperience2: ObjectSchema
    teacherExperience3: ObjectSchema
    teacherExperience4: ObjectSchema
    teacherExperience5: ObjectSchema
  }

  let experienceValidations = {
    teacherExperience0: {},
    teacherExperience1: {},
    teacherExperience2: {},
    teacherExperience3: {},
    teacherExperience4: {},
    teacherExperience5: {},
  }

  for (let key in experienceValidations) {
    const object = {
      arraySchema: Yup.object().shape({
        company: Yup.string().required('required'),
        position: Yup.string().required('required'),
        startDate: Yup.string().required('required'),
        endDate: Yup.string().required('required'),
        id: Yup.number().required(),
      }),
    }

    experienceValidations[key as keyof ExperienceValidations] =
      object.arraySchema!
  }
  return experienceValidations as ExperienceValidations
}
