"use strict";
/* Carnet : tout ce qui a été vu en cours avec Hugo (Preply), de septembre 2025 à l'Aula 41.
   Pour ajouter une notion : ajouter un bloc dans la bonne section.
   Blocs : {h} titre · {p} paragraphe · {tip,txt} encadré · {ex:[[pt,fr]]} exemples (avec écoute)
           {words:[[pt,fr]]} liste de mots · {tbl:{head:[...],rows:[[...]]}} tableau */
const CARNET_PARCOURS = [
  {u:"Unité 1", a:"Aulas 1 à 4", d:"sept.–oct. 2025", t:"Se présenter", s:"Cours d'essai, alphabet, saluer, ser, articles et possessifs, nationalités, professions, dire au revoir"},
  {u:"Unité 2", a:"Aulas 5 à 8", d:"automne 2025", t:"Présenter quelqu'un, donner ses coordonnées", s:"Démonstratifs, nombres 0 à 10, téléphone et e-mail, precisar et ligar, morar em, contractions, famille"},
  {u:"Unité 3", a:"Aulas 9 à 12", d:"automne 2025", t:"L'âge, les papiers, l'heure", s:"Nombres jusqu'au million, ter, dele/dela, documents, poder, querer, daqui/daí, l'heure, fuseaux horaires"},
  {u:"Unité 4", a:"Aulas 13 à 16", d:"hiver 2025–2026", t:"Argent, taxi, restaurant", s:"Le real, le futur (ir + infinitif, futuro simples, será que), mas et nem… nem, le cardápio"},
  {u:"Révision", a:"Unités 1 à 4", d:"janv. 2026", t:"Bilan des unités 1 à 4", s:""},
  {u:"Unité 5", a:"Aulas 17 à 20", d:"janv.–févr. 2026", t:"Horaires, jours, routine", s:"Estar + adjectif, achar que, jours et mois, estudar et trabalhar, questions, cadê, por que / porque"},
  {u:"Unité 6", a:"Aulas 21 à 24", d:"printemps 2026", t:"Sorties, famille, transports", s:"Dá pra, ir pra, ter que, gostar de, la famille élargie, estar + -ndo, saber"},
  {u:"Unité 7", a:"Aulas 25 à 28", d:"printemps 2026", t:"Se déplacer, le quartier", s:"Ser / estar / vir, trazer / levar, ter = haver, saber / conhecer / preferir, sair"},
  {u:"Unité 8", a:"Aulas 29 à 32", d:"printemps–été 2026", t:"Le logement", s:"Ficar, gostaria (conditionnel), impératif, prépositions de lieu, indéfinis, comparatifs, meubles, petites annonces"},
  {u:"Révision", a:"Unités 5 à 8", d:"2026", t:"Bilan des unités 5 à 8", s:""},
  {u:"Unité 9", a:"Aulas 33 à 36", d:"2026", t:"Décrire une personne", s:"Physique, couleurs, vêtements, personnalité, imparfait, faz + durée, lembrar-se, parecer"},
  {u:"Unité 10", a:"Aulas 37 à 40", d:"2026", t:"La santé", s:"Pretérito perfeito, alguém / ninguém, foi… que, fréquence, dor de / dor no, ficar / estar / ter com, le corps"},
  {u:"Unité 11", a:"Aula 41", d:"2026", t:"Un peu d'histoire", s:"Perfeito des verbes en -er et -ir, ser bom em, começar a, acabar de"}
];

const CARNET = [
{id:"grammaire", title:"Grammaire", sub:"Les règles vues en cours, de la plus simple à la plus récente", blocks:[
  {h:"Pronoms et verbe ser"},
  {tbl:{head:["sujet","ser"],rows:[["eu","sou"],["você / ele / ela / a gente","é"],["nós","somos"],["vocês / eles / elas","são"]]}},
  {tip:"À retenir",txt:"A gente = on, et se conjugue comme ele. Tu ne s'emploie que dans certaines régions ; vós n'est plus utilisé à l'oral."},
  {ex:[["Eu sou o Christopher.","Je suis Christopher."],["A gente é francês.","On est français."]]},

  {h:"Articles et possessifs"},
  {p:"L'article se met souvent devant le possessif : <b>o meu</b> apelido, <b>a minha</b> mãe."},
  {tbl:{head:["sujet","masculin","féminin"],rows:[["eu","meu(s)","minha(s)"],["tu","teu(s)","tua(s)"],["você / ele / ela","seu(s)","sua(s)"],["nós","nosso(s)","nossa(s)"],["vocês / eles / elas","seu(s)","sua(s)"]]}},
  {tip:"Pour lever l'ambiguïté",txt:"Seu peut vouloir dire « ton » ou « son ». Pour « son / sa » on dit plutôt dele, dela, deles, delas après le nom."},
  {ex:[["Essa é a namorada dele.","C'est sa copine (à lui)."],["Aquele é o pai delas.","C'est leur père (à elles)."]]},

  {h:"Démonstratifs"},
  {tbl:{head:["distance","masc.","fém.","chose"],rows:[["ici (près de moi)","este(s)","esta(s)","isto"],["là (près de toi)","esse(s)","essa(s)","isso"],["là-bas","aquele(s)","aquela(s)","aquilo"]]}},
  {tip:"À l'oral",txt:"Este et esse s'emploient indifféremment. Isto, isso, aquilo désignent des choses, jamais des personnes."},
  {ex:[["João, este é o Luís.","João, voici Luís."],["O que é isso?","Qu'est-ce que c'est ?"],["Isso!","C'est ça !"]]},

  {h:"Contractions"},
  {tbl:{head:["","+ o","+ a","+ os","+ as"],rows:[["em","no","na","nos","nas"],["de","do","da","dos","das"],["por","pelo","pela","pelos","pelas"],["para (oral)","pro","pra","pros","pras"]]}},
  {p:"Obligatoires avec em, de et por. Avec para, la contraction est orale (pra = para / para a). Avec um, uma : num, numa (facultatif)."},
  {words:[["neste, nesse, naquele","em + este, esse, aquele"],["nisto, nisso, naquilo","em + isto, isso, aquilo"],["deste, desse, daquele","de + este, esse, aquele"],["disso, daquilo","de + isso, aquilo"],["daqui, daí, dali, de lá","de + aqui, aí, ali, lá"]]},
  {ex:[["Passei pelo parque ontem.","Je suis passé par le parc hier."],["Vou pra casa depois do trabalho.","Je rentre à la maison après le travail."],["Você quer alguma coisa daqui?","Tu veux quelque chose d'ici ?"]]},

  {h:"Où ? Pays et villes"},
  {p:"Avec une ville : <b>em</b> sans article. Avec un pays : em + article."},
  {ex:[["Ele mora em Toulouse.","Il habite à Toulouse."],["Moro na França.","J'habite en France."],["A gente mora no Brasil.","On habite au Brésil."],["Eu moro nos Estados Unidos.","J'habite aux États-Unis."]]},
  {tip:"Exceptions",txt:"No Rio (de Janeiro) prend l'article ; em Portugal n'en prend pas (de même em Angola, em Moçambique, em Cabo Verde…)."},
  {words:[["aqui","ici"],["aí","là (où tu es)"],["ali","là-bas, pas loin"],["lá","là-bas"],["logo ali","juste là"]]},

  {h:"Ser, estar, ficar, ter"},
  {words:[["ser + adjectif","caractéristique durable : Ela é inteligente."],["estar + adjectif","état passager : O trânsito está complicado hoje."],["estar + lieu","personne ou chose mobile : Estou no trabalho."],["ficar + lieu","chose immobile : Minha casa fica longe do centro."],["ficar","rester : Vou ficar aqui."],["ficar + adjectif","devenir (réaction) : Fico triste quando…"],["ter = haver = existir","il y a : Tem um shopping no meu bairro."]]},
  {p:"Pour décrire un état :"},
  {ex:[["Estou com fome.","J'ai faim (en ce moment) : estar com + nom."],["Tenho dor nas costas.","J'ai mal au dos (souvent) : ter + symptôme."],["Fico com sono se não durmo.","J'ai sommeil si je ne dors pas : ficar com + nom."],["Não precisa ficar com medo.","Pas besoin d'avoir peur."]]},

  {h:"Poser des questions"},
  {words:[["Que? / Qual?","quel ? (Qual é seu nome?)"],["Quem?","qui ? (pas de pluriel)"],["O que?","qu'est-ce que ? quoi ?"],["Quanto(s)? Quanta(s)?","combien ?"],["Onde?","où ? (onde está ?)"],["Cadê?","où est ? (oral) : Cadê meu livro?"],["Aonde? / Para onde?","où (avec ir) ?"],["De onde?","d'où ?"],["Como?","comment ?"],["Quando?","quand ?"],["Por que…?","pourquoi ? (question)"],["Porque…","parce que (réponse)"],["…por quê?","pourquoi ? (en fin de phrase)"]]},
  {ex:[["Como você se chama?","Comment tu t'appelles ?"],["Quantos anos você tem?","Quel âge as-tu ?"],["Você estuda o quê?","Tu étudies quoi ?"]]},

  {h:"Verbes et prépositions (régences)"},
  {words:[["precisar + verbe","Preciso ir."],["precisar de + nom","Preciso de água."],["gostar de","Gosto de comida italiana."],["morar em","Moro em Paris."],["ir para (pra / pro)","Vamos pro cinema?"],["vir de","Eu venho de ônibus. / Venho da França."],["ter que + verbe","Tenho que trabalhar (= je dois)."],["dá pra + verbe","on peut : Dá pra caminhar no parque."],["querer + nom","Quero uma caixa de chocolates."],["começar a + verbe","O bebê começou a chorar."],["acabar de + verbe","venir de : Acabei de chegar."],["ser bom em","João é bom em matemática."],["lembrar(-se) de","Estou me lembrando de uns amigos."]]},

  {h:"Le futur"},
  {p:"À l'oral, on utilise surtout <b>ir + infinitif</b>. Le futuro simples (radical + -ei, -á, -emos, -ão) est plus écrit ou formel."},
  {ex:[["Vou sair às oito.","Je vais sortir à huit heures."],["Voltarei à França em janeiro.","Je rentrerai en France en janvier."],["Será que vai chover?","Est-ce qu'il va pleuvoir, à ton avis ?"]]},
  {tip:"Será que",txt:"Exprime un doute sur le futur : « je me demande si… ». Irréguliers : farei, direi, trarei."},

  {h:"En train de… (gerúndio)"},
  {p:"<b>estar + verbe en -ndo</b> : on enlève le -r et on ajoute -ndo. Au Portugal, on dit plutôt estar a + infinitif."},
  {ex:[["O que você está fazendo?","Qu'est-ce que tu fais ?"],["Estou lendo o jornal.","Je lis le journal."],["Estou preparando o café.","Je prépare le café."]]},

  {h:"Le passé : perfeito et imperfeito"},
  {p:"<b>Pretérito perfeito</b> : action terminée, ponctuelle. <b>Imperfeito</b> : habitude ou description dans le passé."},
  {tbl:{head:["","-ar (tomar)","-er (permanecer)","-ir (descobrir)"],rows:[["eu","tomei","permaneci","descobri"],["você / ele","tomou","permaneceu","descobriu"],["nós","tomamos","permanecemos","descobrimos"],["vocês / eles","tomaram","permaneceram","descobriram"]]}},
  {ex:[["Já tomei tudo.","J'ai déjà tout pris."],["Portugal descobriu o Brasil em 1500.","Le Portugal a découvert le Brésil en 1500."],["Ele corria todas as manhãs.","Il courait tous les matins."],["Ela tinha um cabelo lindo.","Elle avait de beaux cheveux."],["Já faz uns quatro anos.","Ça fait environ quatre ans (il y a quatre ans)."]]},
  {tip:"Ser et ir au passé",txt:"Mêmes formes : fui, foi, fomos, foram. « Foi o médico que receitou » : c'est le médecin qui l'a prescrit (mise en relief, très courant à l'oral)."},

  {h:"Conditionnel et impératif"},
  {ex:[["Eu gostaria de ver um apartamento.","J'aimerais voir un appartement (politesse)."],["Vocês gostariam de beber alguma coisa?","Vous voulez boire quelque chose ?"],["Veja as fotos.","Regardez les photos."],["Olha, aqui!","Regarde, ici !"]]},
  {p:"Impératif des réguliers : -ar → <b>-e</b> (estude), -er / -ir → <b>-a</b> (coma, divida). Irréguliers : on part de la forme eu du présent (vejo → veja). À l'oral, on entend souvent la forme en -a : olha, fala."},

  {h:"Comparer"},
  {words:[["tão + adj. + quanto","aussi… que"],["mais + adj. + (do) que","plus… que"],["menos + adj. + (do) que","moins… que"],["bom → melhor","meilleur"],["mau / ruim → pior","pire"],["grande → maior","plus grand"],["pequeno → menor","plus petit"]]},
  {ex:[["São Paulo é mais rica do que Salvador.","São Paulo est plus riche que Salvador."],["Ela é tão rica quanto a mãe.","Elle est aussi riche que sa mère."]]},

  {h:"Indéfinis"},
  {words:[["algum / alguma","un, quelque"],["muito / muita","beaucoup de"],["nenhum / nenhuma","aucun (double négation : não tem nenhum)"],["alguém ≠ ninguém","quelqu'un ≠ personne"],["tudo ≠ nada","tout ≠ rien"],["algo","quelque chose (= alguma coisa)"],["cada","chaque"]]},
  {ex:[["Ele não tem nenhum dinheiro.","Il n'a pas un sou."],["Tem alguém aí?","Il y a quelqu'un ?"]]},

  {h:"Mots de liaison et adverbes"},
  {words:[["mas","mais (opposition) ; ≠ mais = plus"],["nem… nem…","ni… ni… : nem quente nem frio"],["sempre ≠ nunca","toujours ≠ jamais"],["quase sempre / quase nunca","presque toujours / presque jamais"],["com frequência","souvent (= geralmente, normalmente)"],["às vezes","parfois (= de vez em quando)"],["raramente","rarement (= dificilmente)"],["muito / um pouco + adj.","très / un peu"],["então","donc, alors"],["ainda","encore"],["já","déjà"]]}
]},

{id:"situations", title:"Situations et expressions", sub:"Ce qu'on dit pour de vrai, de la survie au médecin", blocks:[
  {h:"Survie"},
  {ex:[["Com licença.","Pardon (pour passer, interrompre)."],["Desculpe, você poderia repetir?","Pardon, tu pourrais répéter ?"],["Não entendi.","Je n'ai pas compris."],["Como se escreve?","Comment ça s'écrit ?"],["Como se diz … em português?","Comment on dit … en portugais ?"],["O que significa …?","Que veut dire … ?"]]},
  {h:"Saluer"},
  {ex:[["Oi! / Olá!","Salut ! / Bonjour !"],["Tudo bem? — Tudo, e você?","Ça va ? — Oui, et toi ?"],["Como vai? / Como vão as coisas?","Comment ça va ?"],["Bom dia / Boa tarde / Boa noite","Bonjour (matin) / bonjour (12 h–18 h) / bonsoir, bonne nuit"],["E aí? Beleza?","Quoi de neuf ? Ça roule ?"],["Quanto tempo!","Ça fait longtemps !"]]},
  {words:[["seu Ricardo / dona Marta","monsieur / madame + prénom"],["o senhor, a senhora","vous (politesse)"],["beleza, tranquilo, de boa, suave, tudo certo","ça va (familier)"],["mais ou menos, podia estar melhor","bof"]]},
  {h:"Se présenter"},
  {ex:[["Muito prazer. — O prazer é meu.","Enchanté. — Moi de même."],["Igualmente.","Pareillement."],["Me chamo Christopher. Meu apelido é Chris.","Je m'appelle Christopher. Mon surnom est Chris."],["De onde você é? — Sou da França.","D'où viens-tu ? — Je viens de France."],["Tenho … anos.","J'ai … ans."],["Sou professor. E você?","Je suis professeur. Et toi ?"]]},
  {h:"Partir"},
  {ex:[["Preciso ir. Tchau!","Je dois y aller. Salut !"],["Até mais / até amanhã / até logo / até breve","À plus / à demain / à tout à l'heure / à bientôt"],["Bom fim de semana! — Pra você também.","Bon week-end ! — Toi aussi."],["Eu te ligo.","Je t'appelle."]]},
  {h:"Téléphone et e-mail"},
  {ex:[["Alô?","Allô ?"],["Qual é o seu telefone?","Quel est ton numéro ?"],["Qual é o seu e-mail?","Quel est ton e-mail ?"]]},
  {words:[["@","arroba"],[".","ponto"],["6 (au téléphone)","meia (une demi-douzaine)"],["vc, bjs, tá?, refri","você, beijos, d'accord ?, refrigerante (SMS)"]]},
  {h:"Réagir"},
  {words:[["Que legal!","Super ! Génial !"],["Nossa!","Waouh ! Mon Dieu !"],["Isso!","C'est ça !"],["…, né?","…, hein ? n'est-ce pas ? (= não é)"],["Jura?","Sérieux ?"],["Mundo pequeno!","Le monde est petit !"],["Que saudade!","Tu me manques ! / Quelle nostalgie !"],["Acho que sim / acho que não","Je pense que oui / non"]]},
  {h:"Payer"},
  {ex:[["Quanto custa? / Quanto é?","Combien ça coûte ?"],["Qual é o preço?","Quel est le prix ?"],["Posso pagar com cartão?","Je peux payer par carte ?"]]},
  {words:[["pagar em dinheiro / com cartão / com PIX","payer en liquide / par carte / par PIX"],["troco","la monnaie (qu'on rend)"],["trocado","petite monnaie"],["caixa eletrônico (banco 24 horas)","distributeur"],["retirar / depositar dinheiro","retirer / déposer de l'argent"],["casa de câmbio","bureau de change"]]},
  {h:"Au restaurant"},
  {words:[["cardápio","la carte, le menu"],["restaurante por quilo","on paie au poids"],["à la carte, bufê, rodízio","à la carte, buffet, service à volonté"],["Eu prefiro…","Je préfère…"],["para levar","à emporter"]]},
  {h:"En taxi, en ville"},
  {ex:[["Para onde? — Pro centro, por favor.","Où allez-vous ? — Au centre, s'il vous plaît."],["O trânsito hoje não está bom.","La circulation n'est pas bonne aujourd'hui."],["Por que você não pega o metrô?","Pourquoi tu ne prends pas le métro ? (suggestion)"],["Onde fica a rua das Flores?","Où se trouve la rue des Fleurs ?"]]},
  {h:"Chez le médecin"},
  {ex:[["Que cara é essa?","T'en fais une tête !"],["Estou com dor de cabeça.","J'ai mal à la tête."],["Estou com dor nas costas.","J'ai mal au dos."],["Você já tomou algo?","Tu as déjà pris quelque chose ?"],["Foi o meu médico que receitou.","C'est mon médecin qui l'a prescrit."]]},
  {tip:"Dor de ou dor no ?",txt:"Dor de + partie unique ou interne (cabeça, garganta, barriga, estômago, ouvido). Dor no / na / nos / nas + partie double ou externe (nas costas, nos pés, no joelho), avec quelques exceptions : no peito, no pescoço."}
]},

{id:"vocabulaire", title:"Vocabulaire par thème", sub:"Les listes de mots, rangées comme dans un dictionnaire", blocks:[
  {h:"Nationalités"},
  {words:[["francês / francesa / franceses","français"],["brasileiro / brasileira","brésilien"],["alemão / alemã / alemães","allemand"],["espanhol / espanhóis","espagnol"],["japonês, chinês","japonais, chinois"],["canadense, estadunidense","canadien, américain (invariables)"]]},
  {h:"Professions"},
  {words:[["advogado(a)","avocat"],["enfermeiro(a)","infirmier"],["engenheiro(a)","ingénieur"],["médico(a)","médecin"],["professor(a)","professeur"],["vendedor(a)","vendeur"],["escritor(a)","écrivain"],["ator / atriz","acteur / actrice"],["pesquisador(a)","chercheur"],["dentista, motorista","dentiste, chauffeur (invariables)"]]},
  {h:"Famille"},
  {words:[["pai + mãe = pais","parents (≠ país = pays)"],["marido + esposa = cônjuges","époux"],["filho, filha","fils, fille"],["irmão, irmã","frère, sœur"],["avô (vô), avó (vó)","grand-père, grand-mère"],["neto, neta","petit-fils, petite-fille"],["tio, tia / primo, prima","oncle, tante / cousin, cousine"],["sobrinho, sobrinha","neveu, nièce"],["sogro, sogra","beau-père, belle-mère"],["genro, nora","gendre, belle-fille"],["cunhado, cunhada","beau-frère, belle-sœur"],["namorado(a), colega, amigo(a)","copain/copine, collègue, ami"],["solteiro(a), casado(a)","célibataire, marié"],["o casal","le couple"]]},
  {h:"Nombres"},
  {words:[["um / uma, dois / duas","1, 2 (s'accordent)"],["onze, doze, treze, catorze, quinze","11 à 15"],["dezesseis, dezessete, dezoito, dezenove","16 à 19"],["vinte, trinta, quarenta, cinquenta","20, 30, 40, 50"],["sessenta, setenta, oitenta, noventa","60 à 90"],["cem / cento e um","100 / 101"],["duzentos(as), trezentos(as), quinhentos(as)","200, 300, 500 (s'accordent)"],["mil, dois mil, um milhão","1 000, 2 000, 1 000 000"]]},
  {h:"L'heure"},
  {ex:[["Que horas são?","Quelle heure est-il ?"],["São oito e meia.","Il est huit heures et demie."],["São vinte para as nove.","Il est neuf heures moins vingt."],["É meio-dia. / É meia-noite.","Il est midi. / Il est minuit."],["É uma hora da tarde.","Il est une heure de l'après-midi."]]},
  {p:"Dans les gares et aéroports : treze horas, quatorze horas… comme en France."},
  {h:"Jours, mois, moments"},
  {words:[["segunda, terça, quarta, quinta, sexta(-feira)","lundi à vendredi"],["sábado, domingo","samedi, dimanche"],["fim de semana","week-end"],["anteontem, ontem, hoje, amanhã, depois de amanhã","avant-hier … après-demain"],["janeiro, fevereiro, março, abril, maio, junho","janvier à juin"],["julho, agosto, setembro, outubro, novembro, dezembro","juillet à décembre"],["de manhã, à tarde, à noite","le matin, l'après-midi, le soir"],["às segundas, aos sábados","le lundi, le samedi (chaque semaine)"],["feriado, férias, aniversário","jour férié, vacances, anniversaire"]]},
  {ex:[["Hoje é seis de fevereiro.","Aujourd'hui, c'est le 6 février."],["Meu aniversário é sete de novembro.","Mon anniversaire, c'est le 7 novembre."]]},
  {h:"Documents"},
  {words:[["RG (carteira de identidade)","carte d'identité"],["CPF","numéro fiscal (indispensable au Brésil)"],["passaporte","passeport"],["carteira, carteirinha","carte ; aussi portefeuille"],["endereço, CEP","adresse, code postal"],["data de nascimento","date de naissance"],["crachá","badge"]]},
  {h:"Manger et boire"},
  {words:[["arroz e feijão","riz et haricots noirs"],["frango, peixe, carne assada","poulet, poisson, rôti"],["grelhado, frito, assado","grillé, frit, rôti"],["batata frita, purê","frites, purée"],["linguiça, canja, salada","saucisse, soupe de poulet, salade"],["suco de laranja / de maracujá","jus d'orange / de fruit de la passion"],["refrigerante, guaraná, água com gás","soda, guaraná, eau gazeuse"],["cerveja, vinho tinto / branco","bière, vin rouge / blanc"],["café da manhã, almoço, jantar","petit-déjeuner, déjeuner, dîner"]]},
  {h:"Adjectifs du quotidien"},
  {words:[["adiantado ≠ atrasado","en avance ≠ en retard"],["cheio, lotado ≠ vazio","plein, bondé ≠ vide"],["cansado ≠ descansado","fatigué ≠ reposé"],["complicado ≠ simples","compliqué ≠ simple"],["livre ≠ ocupado","libre ≠ occupé"],["fácil ≠ difícil (fáceis, difíceis)","facile ≠ difficile"],["quente ≠ frio","chaud ≠ froid"],["caro ≠ barato","cher ≠ bon marché"]]},
  {h:"Loisirs et sports"},
  {words:[["cinema, teatro, show, museu","cinéma, théâtre, concert, musée"],["barzinho, boteco, balada","petit bar, troquet, boîte de nuit"],["praça de alimentação","espace restauration (centre commercial)"],["caminhada, natação, ioga, dança","marche, natation, yoga, danse"],["futebol, vôlei, basquete","foot, volley, basket"],["academia, quadra, campo, piscina","salle de sport, terrain (couvert), stade, piscine"]]},
  {h:"Transports"},
  {words:[["ir de carro / de ônibus / de metrô / de trem / de bicicleta","aller en voiture / bus / métro / train / vélo"],["ir a pé","aller à pied (a + vivant : a pé, a cavalo)"],["pegar / tomar o ônibus","prendre le bus"],["dirigir","conduire"],["ponto de ônibus, rodoviária","arrêt de bus, gare routière"],["trânsito","circulation (≠ tráfico : trafic de drogue)"]]},
  {h:"Le quartier"},
  {words:[["padaria, farmácia, supermercado","boulangerie, pharmacie, supermarché"],["correio, banco, livraria","poste, banque, librairie"],["posto de gasolina, estacionamento","station-service, parking"],["banca de jornal, igreja, prefeitura","kiosque, église, mairie"],["ao lado de, em frente a, atrás de","à côté de, en face de, derrière"],["entre, na esquina de, perto de, longe de","entre, au coin de, près de, loin de"],["bairro, cidade, estado","quartier, ville, État"]]},
  {h:"Le logement"},
  {words:[["casa, apartamento, prédio","maison, appartement, immeuble"],["cômodo","pièce"],["quarto (dormitório), suíte","chambre, chambre avec salle de bain"],["sala de estar, sala de jantar","salon, salle à manger"],["cozinha, banheiro, varanda","cuisine, salle de bain, balcon"],["garagem, quitinete, cobertura","garage, studio, penthouse"],["geladeira, fogão, forno","frigo, cuisinière, four"],["sofá, poltrona, mesa, cadeira","canapé, fauteuil, table, chaise"],["cama, armário, estante, espelho","lit, armoire, étagère, miroir"],["tapete, cortinas, quadro, abajur","tapis, rideaux, tableau, lampe"],["corretor de imóveis","agent immobilier"]]},
  {h:"Décrire quelqu'un"},
  {words:[["cabelo liso / ondulado / cacheado / crespo","cheveux raides / ondulés / bouclés / crépus"],["curto, no ombro, comprido","courts, aux épaules, longs"],["loiro, castanho, ruivo, grisalho","blond, châtain, roux, grisonnant"],["olhos castanhos / verdes / azuis","yeux marron / verts / bleus"],["alto, baixo, magro, gordo, de meia-idade","grand, petit, mince, gros, d'âge mûr"],["(ser) careca","(être) chauve"],["(ter) barba, bigode, sardas","barbe, moustache, taches de rousseur"],["(usar) óculos, aparelho","lunettes, appareil dentaire"],["simpático, educado, charmoso","sympa, poli, charmant"],["impaciente, bravo, nervoso","impatient, fâché, nerveux"]]},
  {h:"Couleurs et vêtements"},
  {words:[["branco, preto, amarelo, vermelho, roxo","blanc, noir, jaune, rouge, violet"],["azul (azuis), verde","bleu, vert"],["bege, laranja, cinza, rosa","beige, orange, gris, rose (invariables)"],["marrom (marrons)","marron"],["camisa, camiseta, calça, saia, vestido","chemise, t-shirt, pantalon, jupe, robe"],["terno, gravata, casaco, jaqueta","costume, cravate, manteau, veste"],["bermuda, short, tênis, chinelo","bermuda, short, baskets, tongs"],["roupa","vêtements (le mot courant)"]]},
  {h:"Le corps et la santé"},
  {words:[["cabeça, garganta, ouvido, estômago, barriga","tête, gorge, oreille, estomac, ventre"],["costas, ombros, pescoço, peito","dos, épaules, cou, poitrine"],["perna, joelho, tornozelo, pé","jambe, genou, cheville, pied"],["nariz, boca, olhos, queixo, sobrancelhas","nez, bouche, yeux, menton, sourcils"],["gripe, resfriado, febre, enxaqueca","grippe, rhume, fièvre, migraine"],["remédio, receita médica","médicament, ordonnance"],["sarar","guérir"],["pronto-socorro, plano de saúde","urgences, mutuelle"],["doer : dói, doem","faire mal : ça fait mal"]]},
  {h:"L'école au Brésil"},
  {words:[["ensino infantil","maternelle (jusqu'à 6 ans)"],["ensino fundamental","primaire et collège (6–14 ans)"],["ensino médio","lycée (14–17 ans)"],["graduação, mestrado, doutorado","licence, master, doctorat"],["turma, aluno(a)","classe, élève"]]}
]},

{id:"verbes", title:"Verbes rencontrés", sub:"Ceux qui reviennent en cours, avec leurs pièges", blocks:[
  {p:"Toutes ces conjugaisons s'entraînent dans le parcours et les tableaux de référence de Conjuga."},
  {h:"Irréguliers vus avec Hugo"},
  {tbl:{head:["verbe","eu","você / ele","nós","eles"],rows:[["ser","sou","é","somos","são"],["estar","estou (tô)","está (tá)","estamos","estão"],["ter","tenho","tem","temos","têm"],["ir","vou","vai","vamos","vão"],["vir","venho","vem","vimos","vêm"],["poder","posso","pode","podemos","podem"],["querer","quero","quer","queremos","querem"],["fazer","faço","faz","fazemos","fazem"],["saber","sei","sabe","sabemos","sabem"],["conhecer","conheço","conhece","conhecemos","conhecem"],["preferir","prefiro","prefere","preferimos","preferem"],["ver","vejo","vê","vemos","veem"],["sair","saio","sai","saímos","saem"],["trazer","trago","traz","trazemos","trazem"],["parecer","pareço","parece","parecemos","parecem"]]}},
  {h:"Paires à ne pas confondre"},
  {words:[["saber ≠ conhecer","savoir (une info) ≠ connaître (lieu, personne)"],["perguntar ≠ pedir","demander une info ≠ demander une chose, commander"],["trazer ≠ levar","apporter (ici) ≠ emporter (là-bas)"],["vir ≠ ir","venir (ici) ≠ aller (là-bas)"],["buscar","aller chercher (aller là-bas et ramener)"],["achar","trouver, penser : Acho que sim. / Não acho meu celular."],["ligar = telefonar","appeler ; ligar a TV = allumer"],["mandar = enviar","envoyer"],["falar = conversar","parler, discuter"],["mudar / trocar","changer (de lieu / échanger)"],["lembrar(-se) de","se souvenir de"],["ficar","rester, se trouver, devenir"]]}
]},

{id:"prononciation", title:"Prononciation", sub:"Les remarques de Hugo sur les sons du portugais du Brésil", blocks:[
  {words:[["r en début de mot, rr","r raclé, proche du r français : Rio, carro"],["s entre deux voyelles","z : casa"],["ss, ç","s : passar, cabeça"],["nh","gn : minha"],["lh","ll mouillé : trabalho"],["g + e / i, j","j : gente, girafa"],["x","souvent ch : mexicano, xícara"],["qu dans quarenta, cinquenta","kwa, kwe"],["ão, ã, õe (til ~)","voyelles nasales"],["-l en fin de syllabe","ou : Brasil, legal (« legaou »)"]]},
  {h:"Formes orales"},
  {words:[["tô, tá, tamo, tão","estou, está, estamos, estão"],["cê","você"],["pra, pro","para, para o"],["Quê que cê qué?","O que você quer ?"],["né?","não é ?"]]}
]},

{id:"culture", title:"Culture brésilienne", sub:"Le Brésil vu en cours, et les recommandations de Hugo", blocks:[
  {h:"Le pays"},
  {p:"Cinq régions : Norte, Nordeste, Centro-Oeste, Sudeste, Sul. Le pays est divisé en États, les États en villes, les villes en districts que tout le monde appelle bairros. Chaque région a son sotaque (accent)."},
  {p:"Le 7 septembre est la fête de l'indépendance (feriado nacional)."},
  {h:"Un peu d'histoire"},
  {words:[["1500","Le Portugal « découvre » le Brésil (pau-brasil, Pindorama = terre des palmiers)."],["1530","Début de la colonisation."],["1808","La cour portugaise fuit Napoléon et s'installe à Rio."],["1822","Indépendance, mais le Brésil reste un Empire."],["1889","République ; premier président : Deodoro da Fonseca."]]},
  {h:"Argent et vie pratique"},
  {p:"La monnaie est le real (R$) : pièces de 5, 10, 25, 50 centavos et 1 real ; billets de 2 à 200 reais. On paie énormément par PIX, le virement instantané. R$ 6,59 se dit « seis e cinquenta e nove »."},
  {p:"Restaurants : le « por quilo » (on pèse son assiette) est très courant ; le rodízio sert à volonté."},
  {p:"Santé : le SUS (Sistema Único de Saúde) est public et gratuit ; beaucoup ont aussi un plan de saúde privé. Les médicaments sans tarja (bande) se vendent sans ordonnance en pharmacie."},
  {h:"Musique recommandée"},
  {words:[["Chico Buarque","Construção"],["Gonzaguinha","E vamos à luta"],["Don L","Aquela fé"],["Gal Costa e Tim Maia","Um dia de domingo"],["Mocidade Alegre","samba-enredo du carnaval 2025"],["Jorge Ben Jor","Filho Maravilha"],["Titãs","Família"]]},
  {h:"Films et séries évoqués"},
  {words:[["Cidade de Deus, Carandiru, Central do Brasil","classiques des années 1990–2000"],["Bacurau, O lobo atrás da porta","cinéma récent"],["Que horas ela volta?, Ainda estou aqui, O agente secreto","drames contemporains"],["O auto da compadecida, Saneamento básico","comédies"],["Deus e o diabo na terra do sol","Glauber Rocha, Cinema Novo"],["Cidade invisível","série"],["A queda do céu","Davi Kopenawa"]]}
]}
];
