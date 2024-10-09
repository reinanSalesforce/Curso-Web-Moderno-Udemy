-- Realizei uma agregação com a função "sum" onde vai somar todos os valores do campo "populacao" e informar um total
-- GROUP BY nomeColuna - Vai organizar por grupo nesse caso de regiao

SELECT 
    regiao as 'Região', 
    sum(populacao) as Total
FROM estados
GROUP BY regiao
ORDER BY Total desc