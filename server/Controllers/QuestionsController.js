const knex = require('../database/connection')

class QuestionsController{
    async getQuiz(request, response){
        const raw_questions = await knex('questions').select('*').orderByRaw('RAND()').limit(7)
        const formated_questions = []
        await raw_questions.map(item => {
            formated_questions.push({
                id: item.id,
                question: item.question,
                answers: [item.option_1, item.option_2, item.option_3, item.option_4],
                correctAnswer: item.answer
            })
            return 0
        })
        response.json(formated_questions)
    }
    async getQuizQuestions(){
        const raw_questions = await knex('questions').select('*').orderByRaw('RAND()').limit(7)
        const formated_questions = []
        await raw_questions.map(item => {
            formated_questions.push({
                id: item.id,
                question: item.question,
                answers: [item.option_1, item.option_2, item.option_3, item.option_4],
                correctAnswer: item.answer
            })
            return 0
        })
        return formated_questions
    }
}

module.exports = QuestionsController