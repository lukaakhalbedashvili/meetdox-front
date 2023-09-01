import * as Yup from 'yup'
import {
  TeacherEducationInfoValidationForm,
  TeacherEducationInfoValidationFormInputNames,
} from '../TeacherEducation/TeacherEducationFormSection/teacherEducation.interface'
import {
  TeacherExperienceForm,
  TeacherExperienceInfoValidationFormInputNames,
} from '../TeacherExperience/TeacherExperienceFormSection/teacherExperience.interface'
import { BecomeExpertForm } from '../becomeTeacher.interface'

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
      arraySchema: Yup.object().notRequired().shape({
        university: Yup.string(),
        major: Yup.string(),
        startDate: Yup.string(),
        endDate: Yup.string(),
        id: Yup.number(),
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
        position: Yup.string(),
        startDate: Yup.string(),
        endDate: Yup.string(),
        id: Yup.number(),
      }),
    }

    experienceValidations[key as keyof ExperienceValidations] =
      object.arraySchema!
  }
  return experienceValidations as ExperienceValidations
}

export const customValidation = (values: BecomeExpertForm) => {
  interface ErrorObject {
    [key: string]: {
      [key: string]: string
    }
  }

  let errorObject: ErrorObject = {}

  const {
    teacherEducation0,
    teacherEducation1,
    teacherEducation2,
    teacherEducation3,
    teacherEducation4,
    teacherEducation5,

    teacherExperience0,
    teacherExperience1,
    teacherExperience2,
    teacherExperience3,
    teacherExperience4,
    teacherExperience5,
  } = values

  const education = [
    { form: teacherEducation0, key: 'teacherEducation0' },
    { form: teacherEducation1, key: 'teacherEducation1' },
    { form: teacherEducation2, key: 'teacherEducation2' },
    { form: teacherEducation3, key: 'teacherEducation3' },
    { form: teacherEducation4, key: 'teacherEducation4' },
    { form: teacherEducation5, key: 'teacherEducation5' },
  ]

  const experience = [
    { form: teacherExperience0, key: 'teacherExperience0' },
    { form: teacherExperience1, key: 'teacherExperience1' },
    { form: teacherExperience2, key: 'teacherExperience2' },
    { form: teacherExperience3, key: 'teacherExperience3' },
    { form: teacherExperience4, key: 'teacherExperience4' },
    { form: teacherExperience5, key: 'teacherExperience5' },
  ]

  education.forEach((item) => {
    if (item.form) {
      const fields = [
        {
          key: TeacherEducationInfoValidationFormInputNames.UNIVERSITY,
          value: item.form.university,
        },
        {
          key: TeacherEducationInfoValidationFormInputNames.MAJOR,
          value: item.form.major,
        },
        {
          key: TeacherEducationInfoValidationFormInputNames.START_DATE,
          value: item.form.startDate,
        },
        {
          key: TeacherEducationInfoValidationFormInputNames.END_DATE,
          value: item.form.endDate,
        },
      ]

      fields.forEach((element) => {
        if (!element.value) {
          errorObject = {
            ...errorObject,
            [item.key]: {
              [element.key]: 'required',
            },
          }
        }
      })
    }
  })

  experience.forEach((item) => {
    if (item.form) {
      const fields = [
        {
          key: TeacherExperienceInfoValidationFormInputNames.COMPANY,
          value: item.form.company,
        },
        {
          key: TeacherExperienceInfoValidationFormInputNames.DESCRIPTION,
          value: item.form.description,
        },
        {
          key: TeacherExperienceInfoValidationFormInputNames.START_DATE,
          value: item.form.startDate,
        },
        {
          key: TeacherExperienceInfoValidationFormInputNames.END_DATE,
          value: item.form.endDate,
        },
      ]

      fields.forEach((element) => {
        if (!element.value) {
          errorObject = {
            ...errorObject,
            [item.key]: {
              [element.key]: 'required',
            },
          }
        }
      })
    }
  })

  return errorObject
}
