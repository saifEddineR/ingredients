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
                sh 'touch jenkinstext.txt'
                // sh 'cd client && npm start'
            }
        }
        stage('deliver'){
            steps{
                echo 'hello deliver'
            }
        }
    }
}
