import Joi from "joi";

export const CarValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[[a-zA-ZА-яіІїЇ]{1,20}$')).required().messages({
        'string.empty':'"model" не може бути пустим',
        'string.pattern.base':'Тільки букви мин 1 макс 20',
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.base':'Ціна може бути від 1 до 1000000'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.base':'Рік може бути від 1900 до теперішнього'
    })
})
