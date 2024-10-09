INSERT INTO prefeito
        (nome, cidade_id)
VALUES
    ('Rodrigo Neves', 2),
    ('Raquel Lyra', 3),
    ('Zenaldo Coutinho', null)

select * from prefeito


INSERT INTO prefeito
    (nome, cidade_id)
VALUES
    ('Rafael Greca', null)

-- não vai deixar inserir esse trecho abaixo, pois a cidade_id é chave Unica, não pode se repetir
INSERT INTO prefeito
    (nome, cidade_id)
VALUES
    ('Rodrigo Pinheiro', 3)

