
-- Para atualizar um registro na tabela basta primeiro colocar o "Update" seguido dá tabela, após "set" nome da coluna igual ao valor que você quer e SEMPRE utilizar WHERE 

UPDATE estados
SET nome = 'Maranhão'
WHERE sigla = 'MA'

UPDATE estados
SET nome = 'Paraná', populacao = 11.32
WHERE sigla = 'PR'

-- Consulta com apelido na tabela no exemplo está o "estados" e logo depois uma sigla para informar que pode ser também chamado de estados
 
select est.nome, est.sigla, est.populacao from estados est where sigla = 'PR'