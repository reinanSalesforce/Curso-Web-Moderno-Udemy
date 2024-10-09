-- * entre o select e o from é para informar que é para mostrar todas as colunas dá tabela
select *
from estados

-- Caso queira informar outro nome para a coluna é só colocar após o nome dela "as ' Nome dá coluna que você quer' "
select nome as 'Nome dos Estados', sigla
from estados
where regiao = 'Sul'

select nome, regiao, populacao
from estados
where populacao >= 10
order by populacao desc
