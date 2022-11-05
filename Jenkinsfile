pipeline{
    agent any
    stages{
        stage('test'){
            steps{
                echo 'hello test'
            }
        }
        stage('build'){
            steps{
                sh 'cd client && npm install'
                sh 'npm run build2'
            }
        }
        stage('deliver'){
            steps{
                echo 'hello deliver'
            }
        }
    }
}
