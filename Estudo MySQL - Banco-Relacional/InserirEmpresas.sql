
-- Alterando o tipo dá coluna CNPJ
ALTER TABLE empresas MODIFY COLUMN cnpj VARCHAR(14);

INSERT INTO empresas 
    (nome, cnpj) 
VALUES 
    ('Bradesco', 77371992000198),
    ('Vale', 24822405000173),
    ('Cielo', 15226525000117);

-- Você consegue ver o tipo de cada coluna e se aceita algumas coisas.
desc empresas;


INSERT INTO empresas_unidade
    (empresa_id, cidade_id, sede)
VALUES
    (1,1,1),
    (1,2,0),
    (2,1,0),
    (2,2,1);

select * from empresas_unidade