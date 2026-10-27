export const cloudPractitionerQuestions = [
  {
    "id": 1,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Fundamentos AWS - Modelo de responsabilidade compartilhada",
      "en": "AWS Fundamentals - Shared Responsibility Model"
    },
    "description": {
      "pt-BR": "Uma equipe vai migrar um banco para o Amazon RDS. Qual responsabilidade continua sendo da AWS, e não do cliente?",
      "en": "A team is migrating a database to Amazon RDS. Which responsibility remains with AWS rather than the customer?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Manutenção do hardware físico e das instalações que hospedam o banco",
          "en": "Maintaining the physical hardware and facilities that host the database"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "No RDS, a AWS é responsável pela segurança da nuvem: instalações físicas, servidores, storage e rede que executam as instâncias de banco. Isso nunca é transferido ao cliente.",
          "en": "With RDS, AWS is responsible for security of the cloud: the physical facilities, servers, storage, and network that run the database instances. This is never transferred to the customer."
        }
      },
      {
        "title": {
          "pt-BR": "Criação e rotação das credenciais do usuário master do banco",
          "en": "Creating and rotating the database master user credentials"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O cliente define o usuário master e sua senha na criação da instância e decide como rotacioná-la (manualmente ou via integração com o Secrets Manager que ele próprio configura). A AWS não gerencia essas credenciais por conta própria.",
          "en": "The customer defines the master user and password when creating the instance and decides how to rotate it (manually or through a Secrets Manager integration they configure). AWS does not manage these credentials on its own."
        }
      },
      {
        "title": {
          "pt-BR": "Definição das regras de Security Group que liberam acesso ao banco",
          "en": "Defining the Security Group rules that allow access to the database"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Security Groups associados à instância RDS são configurados pelo cliente. Decidir quais portas e origens podem se conectar ao banco é segurança na nuvem, portanto responsabilidade do cliente.",
          "en": "Security Groups attached to the RDS instance are configured by the customer. Deciding which ports and sources can connect to the database is security in the cloud, so it is the customer's responsibility."
        }
      },
      {
        "title": {
          "pt-BR": "Configuração do período de retenção dos backups automatizados",
          "en": "Configuring the retention period for automated backups"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A AWS executa os backups automatizados, mas é o cliente quem define o período de retenção (de 0 a 35 dias) e a janela de backup de acordo com seus requisitos de recuperação.",
          "en": "AWS runs the automated backups, but the customer sets the retention period (0 to 35 days) and the backup window according to their recovery requirements."
        }
      }
    ],
    "explanation": {
      "pt-BR": "No modelo de responsabilidade compartilhada, a AWS cuida da infraestrutura física e dos componentes que sustentam a nuvem. O cliente administra dados, permissões, configurações e controles dentro da conta.",
      "en": "In the shared responsibility model, AWS handles the physical infrastructure and the components that sustain the cloud. The customer manages data, permissions, configurations, and controls within the account."
    }
  },
  {
    "id": 2,
    "domain": "billing-pricing-support",
    "title": {
      "pt-BR": "Economia da nuvem - Compromissos e elasticidade",
      "en": "Cloud Economics - Commitments and Elasticity"
    },
    "description": {
      "pt-BR": "Uma empresa mantém uma aplicação 24/7 com consumo previsível ao longo do ano, mas quer reduzir custos sem perder a capacidade de crescer quando houver aumento de demanda. Qual combinação é mais adequada?",
      "en": "A company runs a 24/7 application with predictable year-round usage, but wants to reduce costs without losing the ability to scale up when demand increases. Which combination is most appropriate?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Instâncias On-Demand para a carga base e Auto Scaling para os picos",
          "en": "On-Demand Instances for the baseline and Auto Scaling for spikes"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Auto Scaling atende aos picos, mas pagar On-Demand pela carga base 24/7 desperdiça o desconto que um compromisso de uso (Savings Plans ou Reserved Instances) daria para um consumo previsível.",
          "en": "Auto Scaling handles spikes, but paying On-Demand for a 24/7 baseline wastes the discount a usage commitment (Savings Plans or Reserved Instances) would provide for predictable consumption."
        }
      },
      {
        "title": {
          "pt-BR": "Savings Plans para a carga base e Auto Scaling para os picos",
          "en": "Savings Plans for the baseline and Auto Scaling for spikes"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Savings Plans dão desconto em troca de um compromisso de gasto por hora que cobre a carga previsível, enquanto o Auto Scaling adiciona capacidade (cobrada On-Demand) só durante os picos.",
          "en": "Savings Plans provide a discount in exchange for an hourly spend commitment covering the predictable load, while Auto Scaling adds capacity (billed On-Demand) only during spikes."
        }
      },
      {
        "title": {
          "pt-BR": "Reserved Instances de 3 anos dimensionadas para a capacidade de pico",
          "en": "3-year Reserved Instances sized for the peak capacity"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Reserved Instances são cobradas durante todo o prazo, usadas ou não. Dimensioná-las pelo pico faz a empresa pagar 24/7 por capacidade que fica ociosa fora dos períodos de alta demanda.",
          "en": "Reserved Instances are billed for the entire term whether used or not. Sizing them for the peak makes the company pay 24/7 for capacity that sits idle outside high-demand periods."
        }
      },
      {
        "title": {
          "pt-BR": "Spot Instances para a carga base e On-Demand para os picos",
          "en": "Spot Instances for the baseline and On-Demand for spikes"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Spot Instances podem ser interrompidas pela AWS com aviso de apenas dois minutos. Colocar a carga base de uma aplicação 24/7 em Spot compromete a disponibilidade justamente da parte que precisa estar sempre ativa.",
          "en": "Spot Instances can be interrupted by AWS with only a two-minute notice. Placing the baseline of a 24/7 application on Spot jeopardizes availability of exactly the part that must always be running."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Para consumo previsível, Savings Plans ajudam a reduzir custo sem comprometer flexibilidade. Auto Scaling complementa a estratégia ao adaptar capacidade aos picos de uso.",
      "en": "For predictable usage, Savings Plans help reduce cost without sacrificing flexibility. Auto Scaling complements the strategy by adapting capacity to demand spikes."
    }
  },
  {
    "id": 3,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "IAM - Princípio do menor privilégio",
      "en": "IAM - Least Privilege Principle"
    },
    "description": {
      "pt-BR": "Uma equipe precisa acessar apenas buckets S3 específicos do projeto, sem abrir permissão para outros serviços ou contas. Qual abordagem atende melhor ao cenário?",
      "en": "A team needs access to only specific project S3 buckets, without granting permission to other services or accounts. Which approach best fits the scenario?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Anexar a política gerenciada AmazonS3FullAccess ao grupo IAM da equipe",
          "en": "Attach the AmazonS3FullAccess managed policy to the team's IAM group"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "AmazonS3FullAccess concede todas as ações do S3 sobre todos os buckets da conta, não apenas os do projeto. O escopo de recursos é amplo demais e viola o menor privilégio.",
          "en": "AmazonS3FullAccess grants every S3 action on every bucket in the account, not only the project buckets. The resource scope is far too broad and violates least privilege."
        }
      },
      {
        "title": {
          "pt-BR": "Anexar a política gerenciada AmazonS3ReadOnlyAccess ao grupo IAM da equipe",
          "en": "Attach the AmazonS3ReadOnlyAccess managed policy to the team's IAM group"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Essa política usa \"Resource\": \"*\" e permite listar e ler objetos de qualquer bucket da conta. Mesmo sendo somente leitura, ela expõe buckets que não pertencem ao projeto.",
          "en": "This policy uses \"Resource\": \"*\" and allows listing and reading objects in any bucket in the account. Even though it is read-only, it exposes buckets that do not belong to the project."
        }
      },
      {
        "title": {
          "pt-BR": "Anexar ao grupo IAM uma política restrita aos ARNs dos buckets do projeto",
          "en": "Attach to the team's IAM group a policy scoped to the project buckets' ARNs"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Uma política customizada com apenas as ações necessárias e o elemento Resource restrito aos ARNs dos buckets do projeto concede exatamente o acesso exigido, aplicando o menor privilégio.",
          "en": "A customer managed policy with only the required actions and a Resource element restricted to the project buckets' ARNs grants exactly the access needed, applying least privilege."
        }
      },
      {
        "title": {
          "pt-BR": "Criar uma SCP no AWS Organizations permitindo apenas o serviço Amazon S3",
          "en": "Create an SCP in AWS Organizations that allows only the Amazon S3 service"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "SCPs não concedem permissões; apenas definem o limite máximo do que identidades da conta podem fazer. Ainda seria preciso uma política IAM, e a SCP não restringiria o acesso aos buckets específicos do projeto.",
          "en": "SCPs do not grant permissions; they only set the maximum boundary of what identities in the account can do. An IAM policy would still be required, and the SCP would not restrict access to the specific project buckets."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O princípio do menor privilégio é a base do IAM bem configurado. Ele limita cada identidade ao mínimo necessário para executar sua função.",
      "en": "The least privilege principle is the foundation of well-configured IAM. It limits each identity to the minimum needed to perform its function."
    }
  },
  {
    "id": 4,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Computação - Serverless para picos imprevisíveis",
      "en": "Compute - Serverless for Unpredictable Spikes"
    },
    "description": {
      "pt-BR": "Uma API recebe tráfego imprevisível em campanhas e precisa escalar automaticamente, sem gerenciamento de servidores. Qual serviço é o mais indicado?",
      "en": "An API receives unpredictable traffic during campaigns and must scale automatically without server management. Which service is best suited?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon EC2 com Auto Scaling atrás de um Application Load Balancer",
          "en": "Amazon EC2 with Auto Scaling behind an Application Load Balancer"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A arquitetura escala horizontalmente, mas a equipe continua responsável por AMIs, patches do sistema operacional, tipos de instância e tempo de inicialização das instâncias, ou seja, há servidores para gerenciar.",
          "en": "This architecture scales horizontally, but the team remains responsible for AMIs, OS patching, instance types, and instance launch time, meaning there are still servers to manage."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon ECS com tipo de inicialização EC2 atrás de um Application Load Balancer",
          "en": "Amazon ECS with the EC2 launch type behind an Application Load Balancer"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "No tipo de inicialização EC2, os containers rodam em instâncias do cluster que o cliente provisiona, atualiza e escala. O ECS orquestra os containers, mas não elimina o gerenciamento de servidores.",
          "en": "With the EC2 launch type, containers run on cluster instances that the customer provisions, patches, and scales. ECS orchestrates the containers but does not remove server management."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Elastic Beanstalk com ambiente do tipo load-balanced",
          "en": "AWS Elastic Beanstalk with a load-balanced environment"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Elastic Beanstalk automatiza o provisionamento, mas cria instâncias EC2 e um grupo de Auto Scaling na conta do cliente. Ainda há capacidade de instâncias para dimensionar, e a escala depende do tempo de subida de novas VMs.",
          "en": "Elastic Beanstalk automates provisioning, but it creates EC2 instances and an Auto Scaling group in the customer's account. There is still instance capacity to size, and scaling depends on how fast new VMs boot."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Lambda integrado a um endpoint do Amazon API Gateway",
          "en": "AWS Lambda integrated with an Amazon API Gateway endpoint"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O API Gateway expõe a API HTTP de forma gerenciada e o Lambda executa o código por requisição, escalando automaticamente a concorrência sem nenhum servidor para provisionar ou manter.",
          "en": "API Gateway exposes the HTTP API as a managed service and Lambda runs the code per request, automatically scaling concurrency with no servers to provision or maintain."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Lambda é a opção mais aderente quando o foco é escalar automaticamente sem administrar servidores. API Gateway complementa o cenário para exposição de endpoints HTTP.",
      "en": "Lambda is the best fit when the goal is automatic scaling without managing servers. API Gateway complements the scenario for HTTP endpoint exposure."
    }
  },
  {
    "id": 5,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Armazenamento - Acesso imprevisível aos objetos",
      "en": "Storage - Unpredictable Object Access"
    },
    "description": {
      "pt-BR": "A equipe armazena documentos por meses, mas o padrão de acesso muda com frequência e não vale a pena mover objetos manualmente entre classes de armazenamento. Qual classe S3 é mais apropriada?",
      "en": "The team stores documents for months, but access patterns change frequently and it is not worth moving objects manually between storage classes. Which S3 class is most appropriate?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "S3 Intelligent-Tiering com suas camadas de acesso automáticas",
          "en": "S3 Intelligent-Tiering with its automatic access tiers"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Intelligent-Tiering monitora o acesso de cada objeto e o move automaticamente entre camadas de acesso frequente e infrequente, e de volta quando é acessado, sem taxa de recuperação nessas camadas.",
          "en": "Intelligent-Tiering monitors each object's access and automatically moves it between frequent and infrequent access tiers, and back when accessed, with no retrieval fees in those tiers."
        }
      },
      {
        "title": {
          "pt-BR": "S3 Standard com regra de ciclo de vida fixa para Standard-IA",
          "en": "S3 Standard with a fixed lifecycle rule to Standard-IA"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Regras de ciclo de vida fazem a transição com base na idade do objeto, não no acesso real, e nunca devolvem o objeto para o Standard. Se o documento voltar a ser muito acessado, paga taxas de recuperação do Standard-IA.",
          "en": "Lifecycle rules transition objects based on object age, not actual access, and never move them back to Standard. If a document becomes frequently accessed again, it incurs Standard-IA retrieval fees."
        }
      },
      {
        "title": {
          "pt-BR": "S3 Standard-Infrequent Access para todos os documentos",
          "en": "S3 Standard-Infrequent Access for all documents"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Standard-IA tem armazenamento mais barato, mas cobra por GB recuperado e tem duração mínima de 30 dias. Com padrões de acesso que mudam com frequência, os períodos de muito acesso podem tornar essa classe mais cara.",
          "en": "Standard-IA has cheaper storage but charges per GB retrieved and has a 30-day minimum storage duration. With frequently changing access patterns, periods of heavy access can make this class more expensive."
        }
      },
      {
        "title": {
          "pt-BR": "S3 Glacier Instant Retrieval para todos os documentos",
          "en": "S3 Glacier Instant Retrieval for all documents"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Glacier Instant Retrieval devolve dados em milissegundos, mas foi feito para dados acessados cerca de uma vez por trimestre: tem duração mínima de 90 dias e custo de recuperação maior que o Standard-IA.",
          "en": "Glacier Instant Retrieval returns data in milliseconds, but it is designed for data accessed about once per quarter: it has a 90-day minimum storage duration and higher retrieval costs than Standard-IA."
        }
      }
    ],
    "explanation": {
      "pt-BR": "S3 Intelligent-Tiering é a melhor escolha quando o acesso é imprevisível e o objetivo é otimizar custo automaticamente.",
      "en": "S3 Intelligent-Tiering is the best choice when access is unpredictable and the goal is automatic cost optimization."
    }
  },
  {
    "id": 6,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Banco de dados - Alta disponibilidade regional",
      "en": "Databases - Regional High Availability"
    },
    "description": {
      "pt-BR": "Um sistema financeiro relacional não pode parar se uma zona de disponibilidade ficar indisponível. Qual configuração do Amazon RDS é a mais adequada?",
      "en": "A relational financial system cannot stop if one Availability Zone becomes unavailable. Which Amazon RDS configuration is most suitable?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Read Replica do RDS em outra zona de disponibilidade",
          "en": "RDS Read Replica in another Availability Zone"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Read Replicas do RDS usam replicação assíncrona e não têm failover automático: se a AZ primária falhar, a réplica precisa ser promovida manualmente e pode ter perdido as últimas transações.",
          "en": "RDS Read Replicas use asynchronous replication and have no automatic failover: if the primary AZ fails, the replica must be promoted manually and may be missing the latest transactions."
        }
      },
      {
        "title": {
          "pt-BR": "Implantação RDS Multi-AZ com instância standby",
          "en": "RDS Multi-AZ deployment with a standby instance"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Multi-AZ mantém uma standby com replicação síncrona em outra AZ e faz failover automático, atualizando o endpoint DNS, sem intervenção manual.",
          "en": "Multi-AZ keeps a synchronously replicated standby in another AZ and performs automatic failover by updating the DNS endpoint, with no manual intervention."
        }
      },
      {
        "title": {
          "pt-BR": "Instância Single-AZ com backups automatizados habilitados",
          "en": "Single-AZ instance with automated backups enabled"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Backups automatizados permitem restauração point-in-time, mas a restauração cria uma nova instância e leva tempo. Durante a falha da AZ o sistema ficaria parado até a restauração terminar.",
          "en": "Automated backups allow point-in-time restore, but restoring creates a new instance and takes time. During the AZ failure the system would be down until the restore completes."
        }
      },
      {
        "title": {
          "pt-BR": "Snapshots do RDS copiados periodicamente para outra região",
          "en": "RDS snapshots periodically copied to another Region"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Cópias de snapshot entre regiões são uma estratégia de recuperação de desastres, não de alta disponibilidade: exigem restauração manual, geram indisponibilidade e perdem os dados gravados após o último snapshot.",
          "en": "Cross-Region snapshot copies are a disaster recovery strategy, not high availability: they require a manual restore, cause downtime, and lose data written after the last snapshot."
        }
      }
    ],
    "explanation": {
      "pt-BR": "RDS Multi-AZ é a melhor opção para continuidade de uma base relacional quando há falha de uma zona de disponibilidade.",
      "en": "RDS Multi-AZ is the best option for keeping a relational database available when an Availability Zone fails."
    }
  },
  {
    "id": 7,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Entrega global de conteúdo - Baixa latência",
      "en": "Global Content Delivery - Low Latency"
    },
    "description": {
      "pt-BR": "Uma aplicação web com imagens, CSS e JavaScript será acessada por usuários em várias regiões do mundo. A empresa quer menor latência para conteúdo estático. Qual serviço atende melhor?",
      "en": "A web application with images, CSS, and JavaScript will be accessed by users across multiple regions of the world. The company wants lower latency for static content. Which service fits best?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon Route 53 com política de roteamento por latência",
          "en": "Amazon Route 53 with a latency-based routing policy"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O roteamento por latência só direciona o DNS para a região de menor latência entre as que já têm a aplicação implantada. Ele não armazena conteúdo em cache e não reduz latência sem que a empresa replique a origem em várias regiões.",
          "en": "Latency-based routing only points DNS to the lowest-latency Region among those where the application is already deployed. It does not cache content and does not reduce latency unless the company replicates the origin in several Regions."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Global Accelerator na frente do Application Load Balancer",
          "en": "AWS Global Accelerator in front of the Application Load Balancer"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Global Accelerator usa IPs anycast e a rede global da AWS para levar o tráfego até o endpoint, mas não faz cache: toda requisição de imagem, CSS ou JavaScript ainda é atendida pela origem na região.",
          "en": "Global Accelerator uses anycast IPs and the AWS global network to carry traffic to the endpoint, but it does not cache: every image, CSS, or JavaScript request is still served by the origin in the Region."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon CloudFront na frente da origem atual da aplicação",
          "en": "Amazon CloudFront in front of the application's existing origin"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "CloudFront é a CDN da AWS: armazena em cache o conteúdo estático nas edge locations próximas aos usuários, que passam a receber os arquivos sem ir até a região de origem.",
          "en": "CloudFront is the AWS CDN: it caches static content at edge locations close to users, who then receive the files without reaching the origin Region."
        }
      },
      {
        "title": {
          "pt-BR": "S3 Cross-Region Replication para buckets em várias regiões",
          "en": "S3 Cross-Region Replication to buckets in several Regions"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A replicação copia objetos para outras regiões, mas não direciona cada usuário ao bucket mais próximo nem usa edge locations. Cobre apenas algumas regiões, com custo de armazenamento duplicado.",
          "en": "Replication copies objects to other Regions, but it does not route each user to the nearest bucket or use edge locations. It covers only a few Regions, with duplicated storage cost."
        }
      }
    ],
    "explanation": {
      "pt-BR": "CloudFront é a opção correta quando o foco é reduzir latência de conteúdo estático por meio de cache na borda.",
      "en": "CloudFront is the right choice when the goal is to reduce static content latency through edge caching."
    }
  },
  {
    "id": 8,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Banco de dados - Escala horizontal e baixa latência",
      "en": "Databases - Horizontal Scale and Low Latency"
    },
    "description": {
      "pt-BR": "Uma aplicação precisa armazenar dados chave-valor com latência de milissegundos, escala automática e esquema flexível. Qual serviço é o mais indicado?",
      "en": "An application needs to store key-value data with millisecond latency, automatic scaling, and flexible schema. Which service is most suitable?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon RDS for MySQL com Read Replicas",
          "en": "Amazon RDS for MySQL with Read Replicas"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "RDS é relacional, com esquema fixo definido em tabelas. Read Replicas escalam apenas leituras; as escritas continuam limitadas à instância primária, que escala verticalmente.",
          "en": "RDS is relational, with a fixed schema defined in tables. Read Replicas only scale reads; writes remain limited to the primary instance, which scales vertically."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Aurora Serverless v2 compatível com MySQL",
          "en": "Amazon Aurora Serverless v2, MySQL-compatible"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Aurora Serverless v2 ajusta capacidade automaticamente, mas continua sendo um banco relacional compatível com MySQL/PostgreSQL, com esquema rígido e escritas concentradas em uma instância writer.",
          "en": "Aurora Serverless v2 adjusts capacity automatically, but it is still a MySQL/PostgreSQL-compatible relational database with a rigid schema and writes concentrated on a single writer instance."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Redshift Serverless com capacidade automática",
          "en": "Amazon Redshift Serverless with automatic capacity"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Redshift Serverless dispensa o gerenciamento de clusters, mas é um data warehouse colunar para consultas analíticas, não um banco para leituras e gravações de itens chave-valor em milissegundos.",
          "en": "Redshift Serverless removes cluster management, but it is a columnar data warehouse for analytical queries, not a database for millisecond key-value item reads and writes."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon DynamoDB com capacidade sob demanda",
          "en": "Amazon DynamoDB with on-demand capacity"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "DynamoDB é um banco NoSQL chave-valor e de documentos com latência de milissegundos de um dígito, esquema flexível por item e escala horizontal automática, que no modo sob demanda acompanha o tráfego sem planejamento de capacidade.",
          "en": "DynamoDB is a NoSQL key-value and document database with single-digit millisecond latency, flexible per-item schema, and automatic horizontal scaling, which in on-demand mode follows traffic without capacity planning."
        }
      }
    ],
    "explanation": {
      "pt-BR": "DynamoDB é o serviço mais apropriado quando o objetivo é baixa latência com escala horizontal sem gerenciamento de servidores.",
      "en": "DynamoDB is the most appropriate service when the goal is low latency with horizontal scaling and no server management."
    }
  },
  {
    "id": 9,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Mensageria - Desacoplamento e confiabilidade",
      "en": "Messaging - Decoupling and Reliability"
    },
    "description": {
      "pt-BR": "Uma aplicação precisa desacoplar produtores e consumidores, armazenando mensagens até que o processamento seja concluído. Qual serviço é o mais adequado?",
      "en": "An application needs to decouple producers and consumers, storing messages until processing is completed. Which service is most appropriate?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon SQS com consumidores fazendo polling da fila",
          "en": "Amazon SQS with consumers polling the queue"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "SQS armazena as mensagens de forma durável (por até 14 dias) e só as remove quando o consumidor as exclui após processar, desacoplando o ritmo de produtores e consumidores.",
          "en": "SQS stores messages durably (for up to 14 days) and only removes them when the consumer deletes them after processing, decoupling the pace of producers and consumers."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon SNS com assinaturas HTTP para os consumidores",
          "en": "Amazon SNS with HTTP subscriptions for consumers"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "SNS faz push das mensagens para os assinantes e não as mantém armazenadas para consumo posterior. Se o endpoint estiver indisponível, após esgotar a política de novas tentativas a mensagem é descartada ou enviada a uma DLQ.",
          "en": "SNS pushes messages to subscribers and does not keep them stored for later consumption. If the endpoint is unavailable, once the retry policy is exhausted the message is discarded or sent to a DLQ."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon EventBridge com regras apontando para os consumidores",
          "en": "Amazon EventBridge with rules targeting the consumers"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "EventBridge roteia eventos para alvos e tenta reentregar por até 24 horas, mas não funciona como um buffer onde o consumidor busca as mensagens no seu ritmo até concluir o processamento.",
          "en": "EventBridge routes events to targets and retries delivery for up to 24 hours, but it does not act as a buffer from which the consumer pulls messages at its own pace until processing is complete."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Step Functions encadeando produtor e consumidor",
          "en": "AWS Step Functions chaining producer and consumer"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Step Functions orquestra etapas de um fluxo de trabalho com estado, mas as etapas são invocadas diretamente pela máquina de estados. Não há uma fila que armazene mensagens independentes para consumidores escalarem separadamente.",
          "en": "Step Functions orchestrates stateful workflow steps, but each step is invoked directly by the state machine. There is no queue storing independent messages so consumers can scale separately."
        }
      }
    ],
    "explanation": {
      "pt-BR": "SQS é a escolha correta quando o objetivo é absorver picos, desacoplar serviços e garantir processamento assíncrono confiável.",
      "en": "SQS is the right choice when the goal is to absorb spikes, decouple services, and ensure reliable asynchronous processing."
    }
  },
  {
    "id": 10,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Arquitetura orientada a eventos - Roteamento por regras",
      "en": "Event-Driven Architecture - Rule-Based Routing"
    },
    "description": {
      "pt-BR": "Uma aplicação recebe eventos de vários serviços AWS e também de SaaS externos. A equipe quer filtrar e rotear eventos por regras. Qual serviço atende melhor?",
      "en": "An application receives events from multiple AWS services and also external SaaS. The team wants to filter and route events by rules. Which service fits best?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon SNS com políticas de filtro nas assinaturas",
          "en": "Amazon SNS with subscription filter policies"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Filtros do SNS selecionam mensagens por atributos ou conteúdo, mas o SNS não tem fontes de eventos de parceiros SaaS nem recebe eventos de serviços AWS por padrão: cada origem precisa publicar explicitamente no tópico.",
          "en": "SNS filters select messages by attributes or content, but SNS has no SaaS partner event sources and does not receive AWS service events by default: every source must explicitly publish to the topic."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon EventBridge com regras em um barramento de eventos",
          "en": "Amazon EventBridge with rules on an event bus"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "EventBridge recebe eventos de serviços AWS e de parceiros SaaS nativamente, e suas regras filtram por origem e conteúdo do evento para encaminhá-lo a múltiplos alvos.",
          "en": "EventBridge natively receives events from AWS services and SaaS partners, and its rules filter by event source and content to route each event to multiple targets."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon SQS com filas separadas por tipo de evento",
          "en": "Amazon SQS with separate queues per event type"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "SQS não avalia regras: o produtor é quem decide em qual fila publicar. Isso transfere a lógica de roteamento para cada origem, e o SQS não tem integração nativa com fontes SaaS.",
          "en": "SQS does not evaluate rules: the producer decides which queue to publish to. This pushes routing logic into every source, and SQS has no native integration with SaaS sources."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Kinesis Data Streams com múltiplos consumidores",
          "en": "Amazon Kinesis Data Streams with multiple consumers"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Kinesis é voltado a ingestão de streams em alto volume e ordenados por shard. Cada consumidor lê todos os registros e precisa filtrar por conta própria; não há roteamento por regras nem fontes SaaS nativas.",
          "en": "Kinesis is built for high-volume stream ingestion ordered per shard. Each consumer reads all records and must filter on its own; there is no rule-based routing and no native SaaS sources."
        }
      }
    ],
    "explanation": {
      "pt-BR": "EventBridge é o serviço mais adequado para arquiteturas orientadas a eventos que exigem regras de roteamento e integração com múltiplas origens.",
      "en": "EventBridge is the most suitable service for event-driven architectures that require routing rules and integration with multiple sources."
    }
  },
  {
    "id": 11,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Monitoramento - Métricas, logs e alarmes",
      "en": "Monitoring - Metrics, Logs, and Alarms"
    },
    "description": {
      "pt-BR": "A equipe precisa acompanhar métricas, criar alarmes e centralizar logs operacionais de uma aplicação. Qual serviço AWS é o principal para isso?",
      "en": "The team needs to track metrics, create alarms, and centralize operational logs for an application. Which AWS service is the main one for this?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Config com regras gerenciadas habilitadas",
          "en": "AWS Config with managed rules enabled"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "AWS Config registra o estado de configuração dos recursos e avalia conformidade. Ele não coleta métricas de desempenho da aplicação, não centraliza logs operacionais e não cria alarmes sobre métricas.",
          "en": "AWS Config records resource configuration state and evaluates compliance. It does not collect application performance metrics, centralize operational logs, or create metric alarms."
        }
      },
      {
        "title": {
          "pt-BR": "AWS CloudTrail com uma trilha para todas as regiões",
          "en": "AWS CloudTrail with a multi-Region trail"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "CloudTrail registra chamadas de API feitas na conta (quem fez o quê e quando) para auditoria. Ele não coleta métricas como CPU ou latência, nem os logs gerados pela própria aplicação.",
          "en": "CloudTrail records API calls made in the account (who did what and when) for auditing. It does not collect metrics such as CPU or latency, nor the logs produced by the application itself."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon CloudWatch com o agente unificado nas instâncias",
          "en": "Amazon CloudWatch with the unified agent on instances"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "CloudWatch coleta métricas de serviços e do agente, centraliza logs no CloudWatch Logs e permite criar alarmes com ações, sendo o serviço principal de monitoramento operacional.",
          "en": "CloudWatch collects metrics from services and from the agent, centralizes logs in CloudWatch Logs, and lets you create alarms with actions, making it the main operational monitoring service."
        }
      },
      {
        "title": {
          "pt-BR": "AWS X-Ray com instrumentação do SDK na aplicação",
          "en": "AWS X-Ray with SDK instrumentation in the application"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "X-Ray rastreia requisições entre componentes distribuídos para identificar gargalos e erros. Ele não é o serviço para criar alarmes sobre métricas nem para centralizar logs operacionais.",
          "en": "X-Ray traces requests across distributed components to identify bottlenecks and errors. It is not the service for creating metric alarms or centralizing operational logs."
        }
      }
    ],
    "explanation": {
      "pt-BR": "CloudWatch é o serviço central para monitorar recursos, gerar alarmes e analisar logs em uma operação AWS.",
      "en": "CloudWatch is the central service for monitoring resources, generating alarms, and analyzing logs in an AWS environment."
    }
  },
  {
    "id": 12,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Governança - Conformidade e drift de configuração",
      "en": "Governance - Compliance and Configuration Drift"
    },
    "description": {
      "pt-BR": "Uma empresa quer identificar mudanças de configuração e verificar se recursos seguem regras internas de conformidade. Qual serviço ajuda mais nesse controle contínuo?",
      "en": "A company wants to identify configuration changes and verify whether resources follow internal compliance rules. Which service helps most with continuous control?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Security Hub com padrões de segurança habilitados",
          "en": "AWS Security Hub with security standards enabled"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Security Hub agrega achados e executa controles de padrões predefinidos (como CIS e AWS Foundational Security Best Practices), inclusive dependendo do AWS Config para isso. Não é ele que registra o histórico de configuração nem avalia regras internas próprias.",
          "en": "Security Hub aggregates findings and runs controls from predefined standards (such as CIS and AWS Foundational Security Best Practices), even relying on AWS Config to do so. It is not what records configuration history or evaluates your own internal rules."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Inspector com varredura contínua habilitada",
          "en": "Amazon Inspector with continuous scanning enabled"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Inspector procura vulnerabilidades de software (CVEs) e exposição de rede em EC2, imagens de container e funções Lambda. Ele não rastreia mudanças de configuração de recursos nem avalia regras de conformidade.",
          "en": "Inspector looks for software vulnerabilities (CVEs) and network exposure in EC2, container images, and Lambda functions. It does not track resource configuration changes or evaluate compliance rules."
        }
      },
      {
        "title": {
          "pt-BR": "AWS CloudTrail com uma trilha organizacional",
          "en": "AWS CloudTrail with an organization trail"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "CloudTrail mostra quem chamou qual API e quando, mas não mantém o estado de configuração resultante de cada recurso nem avalia se ele está conforme uma regra.",
          "en": "CloudTrail shows who called which API and when, but it does not keep each resource's resulting configuration state or evaluate whether it complies with a rule."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Config com regras gerenciadas e personalizadas",
          "en": "AWS Config with managed and custom rules"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "AWS Config registra continuamente a configuração e o histórico de mudanças dos recursos e avalia cada um contra regras gerenciadas ou personalizadas, apontando os não conformes.",
          "en": "AWS Config continuously records resource configurations and change history and evaluates each resource against managed or custom rules, flagging noncompliant ones."
        }
      }
    ],
    "explanation": {
      "pt-BR": "AWS Config é o serviço indicado para rastrear alterações de configuração e validar conformidade de forma contínua.",
      "en": "AWS Config is the service intended to track configuration changes and validate compliance continuously."
    }
  },
  {
    "id": 13,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Conectividade híbrida - Link dedicado com AWS",
      "en": "Hybrid Connectivity - Dedicated Link to AWS"
    },
    "description": {
      "pt-BR": "Uma empresa precisa de conectividade privada e dedicada entre o data center on-premises e a AWS, com maior consistência de desempenho que uma VPN comum. Qual serviço escolher?",
      "en": "A company needs private and dedicated connectivity between its on-premises data center and AWS, with more consistent performance than a regular VPN. Which service should it choose?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Direct Connect terminando em um Virtual Private Gateway",
          "en": "AWS Direct Connect terminating on a virtual private gateway"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Direct Connect estabelece um circuito de rede privado entre o data center e a AWS, sem passar pela internet pública, com largura de banda dedicada e latência mais consistente.",
          "en": "Direct Connect establishes a private network circuit between the data center and AWS, bypassing the public internet, with dedicated bandwidth and more consistent latency."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Site-to-Site VPN com dois túneis IPsec redundantes",
          "en": "AWS Site-to-Site VPN with two redundant IPsec tunnels"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Os dois túneis dão redundância e criptografia, mas o tráfego continua trafegando pela internet pública, cuja latência e largura de banda variam. Não é um enlace dedicado.",
          "en": "The two tunnels provide redundancy and encryption, but traffic still travels over the public internet, whose latency and bandwidth vary. It is not a dedicated link."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Client VPN com autenticação via Active Directory",
          "en": "AWS Client VPN with Active Directory authentication"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Client VPN conecta usuários individuais (dispositivos com cliente OpenVPN) à AWS pela internet. É acesso remoto de usuários, não um enlace entre o data center e a AWS.",
          "en": "Client VPN connects individual users (devices running an OpenVPN client) to AWS over the internet. It is remote user access, not a link between the data center and AWS."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Transit Gateway com anexos de VPN acelerada",
          "en": "AWS Transit Gateway with accelerated VPN attachments"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A VPN acelerada usa o Global Accelerator para entrar na rede da AWS pela edge location mais próxima, mas continua sendo um túnel IPsec cujo trecho inicial passa pela internet pública. Melhora, mas não iguala um circuito dedicado.",
          "en": "Accelerated VPN uses Global Accelerator to enter the AWS network at the nearest edge location, but it is still an IPsec tunnel whose first leg crosses the public internet. It improves performance but does not match a dedicated circuit."
        }
      }
    ],
    "explanation": {
      "pt-BR": "AWS Direct Connect é a melhor escolha quando a necessidade é conectividade dedicada, privada e com desempenho mais previsível.",
      "en": "AWS Direct Connect is the best choice when the need is dedicated, private connectivity with more predictable performance."
    }
  },
  {
    "id": 14,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Identidade - Acesso federado a múltiplas contas",
      "en": "Identity - Federated Access to Multiple Accounts"
    },
    "description": {
      "pt-BR": "Uma organização quer fornecer acesso centralizado a várias contas AWS para usuários corporativos, com login único e credenciais temporárias. Qual serviço atende melhor?",
      "en": "An organization wants to provide centralized access to multiple AWS accounts for corporate users, with single sign-on and temporary credentials. Which service fits best?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Usuários IAM individuais com MFA em cada conta",
          "en": "Individual IAM users with MFA in each account"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "MFA melhora a segurança, mas usuários IAM têm credenciais de longo prazo por conta: o funcionário teria um login diferente em cada conta, sem single sign-on nem gestão centralizada.",
          "en": "MFA improves security, but IAM users have long-term credentials per account: the employee would have a different login in each account, with no single sign-on or central management."
        }
      },
      {
        "title": {
          "pt-BR": "AWS IAM Identity Center integrado ao diretório corporativo",
          "en": "AWS IAM Identity Center integrated with the corporate directory"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "IAM Identity Center conecta o diretório corporativo, oferece um portal de single sign-on e atribui permission sets às contas da organização, emitindo credenciais temporárias em cada acesso.",
          "en": "IAM Identity Center connects the corporate directory, provides a single sign-on portal, and assigns permission sets to the organization's accounts, issuing temporary credentials on each access."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Cognito com user pools para os funcionários",
          "en": "Amazon Cognito with user pools for employees"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Cognito é voltado à autenticação de usuários finais de aplicações web e mobile. Ele não oferece acesso SSO de funcionários ao console e à CLI de várias contas AWS com permission sets.",
          "en": "Cognito is aimed at authenticating end users of web and mobile applications. It does not provide workforce SSO into the console and CLI of multiple AWS accounts with permission sets."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Organizations com SCPs aplicadas às contas",
          "en": "AWS Organizations with SCPs applied to the accounts"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Organizations agrupa contas e SCPs limitam o máximo de permissões, mas nenhum dos dois cria identidades, autentica usuários ou fornece login único.",
          "en": "Organizations groups accounts and SCPs cap the maximum permissions, but neither creates identities, authenticates users, or provides single sign-on."
        }
      }
    ],
    "explanation": {
      "pt-BR": "IAM Identity Center é o caminho mais adequado para acesso federado, centralizado e com credenciais temporárias em várias contas AWS.",
      "en": "IAM Identity Center is the most suitable path for federated, centralized access with temporary credentials across multiple AWS accounts."
    }
  },
  {
    "id": 15,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Criptografia - Gestão de chaves",
      "en": "Encryption - Key Management"
    },
    "description": {
      "pt-BR": "Uma equipe quer criptografar dados em repouso e controlar o ciclo de vida das chaves usadas pelos serviços AWS. Qual serviço deve ser usado?",
      "en": "A team wants to encrypt data at rest and control the lifecycle of keys used by AWS services. Which service should be used?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Secrets Manager com rotação automática",
          "en": "AWS Secrets Manager with automatic rotation"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Secrets Manager armazena e rotaciona segredos como senhas de banco e chaves de API. Ele próprio usa o KMS para criptografar os segredos e não é o serviço que fornece as chaves de criptografia em repouso dos outros serviços.",
          "en": "Secrets Manager stores and rotates secrets such as database passwords and API keys. It itself uses KMS to encrypt secrets and is not the service that provides at-rest encryption keys for other services."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Certificate Manager com certificados públicos",
          "en": "AWS Certificate Manager with public certificates"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "ACM provisiona e renova certificados TLS usados para criptografia em trânsito (HTTPS). Ele não gerencia as chaves usadas para criptografar dados em repouso em S3, EBS ou RDS.",
          "en": "ACM provisions and renews TLS certificates used for encryption in transit (HTTPS). It does not manage the keys used to encrypt data at rest in S3, EBS, or RDS."
        }
      },
      {
        "title": {
          "pt-BR": "AWS KMS com chaves gerenciadas pelo cliente",
          "en": "AWS KMS with customer managed keys"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "KMS é integrado nativamente à maioria dos serviços AWS para criptografia em repouso, e as chaves gerenciadas pelo cliente permitem controlar políticas, rotação, desativação e exclusão, com uso auditado no CloudTrail.",
          "en": "KMS is natively integrated with most AWS services for encryption at rest, and customer managed keys let you control policies, rotation, disabling, and deletion, with usage audited in CloudTrail."
        }
      },
      {
        "title": {
          "pt-BR": "AWS CloudHSM com um cluster de HSMs dedicados",
          "en": "AWS CloudHSM with a dedicated HSM cluster"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "CloudHSM oferece HSMs single-tenant usados pela aplicação via PKCS#11, JCE ou CNG. Os serviços AWS não o usam diretamente para criptografia em repouso; isso só ocorre através do KMS com custom key store.",
          "en": "CloudHSM provides single-tenant HSMs used by applications through PKCS#11, JCE, or CNG. AWS services do not use it directly for encryption at rest; that only happens through KMS with a custom key store."
        }
      }
    ],
    "explanation": {
      "pt-BR": "AWS KMS é o serviço certo para gerenciar chaves usadas na criptografia de dados em repouso em serviços AWS.",
      "en": "AWS KMS is the right service for managing keys used in encrypting data at rest across AWS services."
    }
  },
  {
    "id": 16,
    "domain": "billing-pricing-support",
    "title": {
      "pt-BR": "Custos - Orçamento e alertas",
      "en": "Costs - Budgeting and Alerts"
    },
    "description": {
      "pt-BR": "A equipe financeira quer definir um limite mensal de gastos e receber alertas quando o consumo se aproximar ou ultrapassar esse valor. Qual serviço ajuda nisso?",
      "en": "The finance team wants to set a monthly spending limit and receive alerts when consumption approaches or exceeds it. Which service helps with that?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Cost Explorer com previsão de gastos",
          "en": "AWS Cost Explorer with spend forecasting"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Cost Explorer visualiza custos históricos e projeta gastos futuros, mas não permite definir um limite mensal nem envia alertas quando o consumo se aproxima dele.",
          "en": "Cost Explorer visualizes historical costs and forecasts future spending, but it does not let you set a monthly limit or send alerts when usage approaches it."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Cost and Usage Report entregue no Amazon S3",
          "en": "AWS Cost and Usage Report delivered to Amazon S3"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O CUR entrega os dados de faturamento mais detalhados em arquivos no S3 para análise, mas é apenas uma fonte de dados: não define limites nem gera notificações.",
          "en": "CUR delivers the most detailed billing data as files in S3 for analysis, but it is only a data source: it does not define limits or generate notifications."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Cost Anomaly Detection com monitores por serviço",
          "en": "AWS Cost Anomaly Detection with per-service monitors"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Cost Anomaly Detection usa machine learning para alertar sobre gastos fora do padrão histórico. Ele não compara o consumo com um valor mensal fixo definido pela equipe financeira.",
          "en": "Cost Anomaly Detection uses machine learning to alert on spending that deviates from historical patterns. It does not compare usage against a fixed monthly amount set by the finance team."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Budgets com um orçamento de custo mensal",
          "en": "AWS Budgets with a monthly cost budget"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "AWS Budgets permite definir um valor mensal e configurar alertas por e-mail ou SNS com base no gasto real ou previsto, por exemplo ao atingir 80% e 100% do orçamento.",
          "en": "AWS Budgets lets you set a monthly amount and configure email or SNS alerts based on actual or forecasted spend, for example at 80% and 100% of the budget."
        }
      }
    ],
    "explanation": {
      "pt-BR": "AWS Budgets é o serviço mais indicado para controle proativo de custo com alertas configuráveis.",
      "en": "AWS Budgets is the most suitable service for proactive cost control with configurable alerts."
    }
  },
  {
    "id": 17,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "Well-Architected - Excelência operacional",
      "en": "Well-Architected - Operational Excellence"
    },
    "description": {
      "pt-BR": "Qual pilar da AWS Well-Architected Framework enfatiza executar e monitorar workloads, além de melhorar processos continuamente?",
      "en": "Which pillar of the AWS Well-Architected Framework emphasizes running and monitoring workloads and continuously improving processes?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Excelência operacional",
          "en": "Operational Excellence"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Esse pilar trata de executar e monitorar sistemas, usar operações como código, fazer mudanças pequenas e frequentes e refinar os procedimentos operacionais continuamente.",
          "en": "This pillar covers running and monitoring systems, performing operations as code, making small frequent changes, and continuously refining operating procedures."
        }
      },
      {
        "title": {
          "pt-BR": "Eficiência de desempenho",
          "en": "Performance Efficiency"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Eficiência de desempenho também envolve monitoramento, mas com foco em usar os recursos computacionais de forma eficiente e escolher os tipos e tamanhos certos conforme a demanda muda, não em melhorar processos operacionais.",
          "en": "Performance Efficiency also involves monitoring, but its focus is using computing resources efficiently and choosing the right types and sizes as demand changes, not improving operational processes."
        }
      },
      {
        "title": {
          "pt-BR": "Confiabilidade",
          "en": "Reliability"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Confiabilidade trata da capacidade de a carga de trabalho executar sua função corretamente e se recuperar de falhas, com foco em tolerância a falhas, cotas e recuperação, não na melhoria contínua dos processos de operação.",
          "en": "Reliability covers a workload's ability to perform its function correctly and recover from failures, focusing on fault tolerance, quotas, and recovery, not on continuously improving operating processes."
        }
      },
      {
        "title": {
          "pt-BR": "Sustentabilidade",
          "en": "Sustainability"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Sustentabilidade também fala em melhoria contínua, mas o objetivo é reduzir o impacto ambiental e o consumo de energia das cargas de trabalho, não executar e monitorar operações.",
          "en": "Sustainability also mentions continuous improvement, but its goal is reducing the environmental impact and energy consumption of workloads, not running and monitoring operations."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Excelência operacional é o pilar que orienta a execução consistente, a automação e a melhoria contínua dos sistemas.",
      "en": "Operational Excellence is the pillar that guides consistent execution, automation, and continuous system improvement."
    }
  },
  {
    "id": 18,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "Recuperação de desastres - Estratégia enxuta",
      "en": "Disaster Recovery - Lean Strategy"
    },
    "description": {
      "pt-BR": "Uma empresa quer manter uma cópia mínima do ambiente pronta para subir rapidamente após falha, com custo menor que manter toda a infraestrutura ativa. Qual estratégia de DR é essa?",
      "en": "A company wants to keep a minimal copy of the environment ready to scale up quickly after a failure, with lower cost than keeping all infrastructure active. Which DR strategy is this?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Backup e restore",
          "en": "Backup and restore"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Nessa estratégia só existem backups; toda a infraestrutura precisa ser recriada e os dados restaurados após o desastre. Não há um núcleo mínimo já em execução, por isso o RTO é o mais alto. RTO (Recovery Time Objective, objetivo de tempo de recuperação) é o tempo máximo aceitável para restaurar o serviço após uma falha.",
          "en": "In this strategy only backups exist; the entire infrastructure must be recreated and data restored after the disaster. There is no minimal core already running, so RTO is the highest. RTO (Recovery Time Objective) is the maximum acceptable time to restore service after a failure."
        }
      },
      {
        "title": {
          "pt-BR": "Pilot light",
          "en": "Pilot light"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Pilot light mantém apenas o núcleo essencial ativo (como dados replicados), com os servidores de aplicação desligados ou inexistentes até o failover, quando são provisionados e escalados.",
          "en": "Pilot light keeps only the essential core active (such as replicated data), with application servers off or not yet created until failover, when they are provisioned and scaled."
        }
      },
      {
        "title": {
          "pt-BR": "Warm standby",
          "en": "Warm standby"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Warm standby mantém uma cópia completa e funcional do ambiente rodando em escala reduzida, já capaz de atender tráfego. Isso vai além de uma cópia mínima e custa mais que o pilot light.",
          "en": "Warm standby keeps a complete, functional copy of the environment running at reduced scale, already able to serve traffic. That goes beyond a minimal copy and costs more than pilot light."
        }
      },
      {
        "title": {
          "pt-BR": "Multi-site active/active",
          "en": "Multi-site active/active"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Active/active mantém ambientes em escala total atendendo tráfego em mais de um local ao mesmo tempo. Tem o menor RTO, mas é a estratégia mais cara, o oposto de uma cópia mínima. RTO (Recovery Time Objective, objetivo de tempo de recuperação) é o tempo máximo aceitável para restaurar o serviço após uma falha.",
          "en": "Active/active keeps full-scale environments serving traffic in more than one location at the same time. It has the lowest RTO, but it is the most expensive strategy, the opposite of a minimal copy. RTO (Recovery Time Objective) is the maximum acceptable time to restore service after a failure."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Pilot light é a melhor descrição quando existe um núcleo mínimo pronto para expansão após falha, com custo menor que manter tudo ativo.",
      "en": "Pilot light is the best description when there is a minimal core ready to expand after a failure, at lower cost than keeping everything active."
    }
  },
  {
    "id": 19,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Balanceamento de carga - Distribuição de tráfego",
      "en": "Load Balancing - Traffic Distribution"
    },
    "description": {
      "pt-BR": "Uma aplicação possui várias instâncias em diferentes zonas de disponibilidade e precisa distribuir o tráfego apenas para os destinos saudáveis. Qual serviço deve ser usado?",
      "en": "An application has multiple instances in different Availability Zones and needs to distribute traffic only to healthy targets. Which service should be used?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon Route 53 com roteamento multivalor e health checks",
          "en": "Amazon Route 53 with multivalue routing and health checks"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O roteamento multivalor devolve até oito registros saudáveis, mas atua no nível de DNS: os clientes fazem cache das respostas pelo TTL e escolhem o IP, então não há distribuição por requisição entre os alvos.",
          "en": "Multivalue routing returns up to eight healthy records, but it works at the DNS level: clients cache responses for the TTL and pick the IP, so there is no per-request distribution across targets."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon CloudFront com um grupo de origens para failover",
          "en": "Amazon CloudFront with an origin group for failover"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Um grupo de origens tem uma origem primária e uma secundária usada apenas em caso de falha. Ele não reparte requisições entre várias instâncias em diferentes AZs.",
          "en": "An origin group has a primary origin and a secondary one used only on failure. It does not spread requests across multiple instances in different AZs."
        }
      },
      {
        "title": {
          "pt-BR": "Elastic Load Balancing com um Application Load Balancer",
          "en": "Elastic Load Balancing with an Application Load Balancer"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O ELB distribui cada requisição entre os alvos registrados em várias AZs e, com base em health checks, envia tráfego apenas para os destinos saudáveis.",
          "en": "ELB distributes each request across registered targets in multiple AZs and, based on health checks, sends traffic only to healthy targets."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon EC2 Auto Scaling com health checks do EC2",
          "en": "Amazon EC2 Auto Scaling with EC2 health checks"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Auto Scaling substitui instâncias com falha e ajusta a quantidade de instâncias, mas não recebe nem distribui as requisições dos usuários entre elas.",
          "en": "Auto Scaling replaces failed instances and adjusts the number of instances, but it does not receive or distribute user requests among them."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Elastic Load Balancing é o serviço certo para distribuir requisições entre alvos saudáveis de forma automática.",
      "en": "Elastic Load Balancing is the right service for automatically distributing requests across healthy targets."
    }
  },
  {
    "id": 20,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "DNS global - Roteamento inteligente",
      "en": "Global DNS - Intelligent Routing"
    },
    "description": {
      "pt-BR": "A empresa quer gerenciar DNS público, aplicar health checks e direcionar usuários para endpoints adequados em caso de falha. Qual serviço atende melhor?",
      "en": "The company wants to manage public DNS, apply health checks, and direct users to suitable endpoints in case of failure. Which service fits best?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon CloudFront com domínio personalizado e origin failover",
          "en": "Amazon CloudFront with a custom domain and origin failover"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "CloudFront pode alternar entre origens, mas é uma CDN: não hospeda zonas DNS públicas. O domínio personalizado ainda precisa de um provedor de DNS que aponte para a distribuição.",
          "en": "CloudFront can switch between origins, but it is a CDN: it does not host public DNS zones. The custom domain still needs a DNS provider pointing to the distribution."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Global Accelerator com health checks nos endpoints",
          "en": "AWS Global Accelerator with endpoint health checks"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Global Accelerator fornece IPs anycast estáticos e desvia tráfego de endpoints não saudáveis, mas não é um serviço de DNS: não gerencia zonas nem registros do domínio público.",
          "en": "Global Accelerator provides static anycast IPs and diverts traffic away from unhealthy endpoints, but it is not a DNS service: it does not manage the public domain's zones or records."
        }
      },
      {
        "title": {
          "pt-BR": "Elastic Load Balancing com balanceamento entre zonas",
          "en": "Elastic Load Balancing with cross-zone load balancing"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O ELB verifica a saúde dos alvos dentro de uma região e fornece um nome DNS próprio, mas não gerencia o DNS público da empresa nem direciona usuários para endpoints em outras regiões.",
          "en": "ELB checks target health within a single Region and provides its own DNS name, but it does not manage the company's public DNS or direct users to endpoints in other Regions."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Route 53 com política de roteamento de failover",
          "en": "Amazon Route 53 with a failover routing policy"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Route 53 hospeda zonas DNS públicas, executa health checks e, com a política de failover, responde com o endpoint secundário quando o primário fica indisponível.",
          "en": "Route 53 hosts public DNS zones, runs health checks, and, with the failover routing policy, answers with the secondary endpoint when the primary becomes unavailable."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Route 53 é o serviço de DNS gerenciado da AWS, ideal para roteamento inteligente e health checks de domínios públicos.",
      "en": "Route 53 is AWS's managed DNS service, ideal for intelligent routing and health checks for public domains."
    }
  },
  {
    "id": 21,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "Conceitos de nuvem - Ajuste de capacidade à demanda",
      "en": "Cloud Concepts - Matching Capacity to Demand"
    },
    "description": {
      "pt-BR": "Um site de venda de ingressos recebe 20 vezes mais acessos quando as vendas abrem e volta ao tráfego normal poucas horas depois. A empresa quer que os recursos sejam adicionados e removidos automaticamente, pagando só pela capacidade usada. Qual característica da nuvem descreve esse comportamento?",
      "en": "A ticketing website receives 20 times more traffic when sales open and returns to normal traffic a few hours later. The company wants resources to be added and removed automatically, paying only for the capacity used. Which cloud characteristic describes this behavior?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Escalabilidade, que permite ao sistema crescer para suportar mais carga",
          "en": "Scalability, which allows the system to grow to handle more load"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Escalabilidade é a capacidade de acomodar mais carga adicionando recursos ao longo do tempo. Ela não implica, por si só, ajustar a capacidade automaticamente nos dois sentidos, liberando recursos quando a demanda cai, que é o ponto central do cenário.",
          "en": "Scalability is the ability to accommodate more load by adding resources over time. By itself it does not imply automatically adjusting capacity in both directions and releasing resources when demand drops, which is the core of the scenario."
        }
      },
      {
        "title": {
          "pt-BR": "Elasticidade, que ajusta os recursos para cima e para baixo conforme a demanda",
          "en": "Elasticity, which adjusts resources up and down according to demand"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Elasticidade é a capacidade de adquirir recursos quando necessário e liberá-los quando não são mais usados, de forma automática. Assim a empresa atende ao pico e deixa de pagar pela capacidade extra logo depois.",
          "en": "Elasticity is the ability to acquire resources when needed and release them when they are no longer used, automatically. This way the company serves the peak and stops paying for the extra capacity right afterward."
        }
      },
      {
        "title": {
          "pt-BR": "Alta disponibilidade, que mantém o sistema acessível na maior parte do tempo",
          "en": "High availability, which keeps the system accessible most of the time"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Alta disponibilidade trata de minimizar o tempo de indisponibilidade, normalmente com redundância entre zonas. Ela não descreve o aumento e a redução automáticos de capacidade em função do volume de acessos.",
          "en": "High availability is about minimizing downtime, usually through redundancy across zones. It does not describe automatically increasing and decreasing capacity based on traffic volume."
        }
      },
      {
        "title": {
          "pt-BR": "Tolerância a falhas, que mantém o sistema operando mesmo com falhas de componentes",
          "en": "Fault tolerance, which keeps the system running even when components fail"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Tolerância a falhas garante que o sistema continue funcionando quando um componente falha, por meio de redundância. O cenário não envolve falhas, e sim variação de demanda e pagamento proporcional ao uso.",
          "en": "Fault tolerance ensures the system keeps working when a component fails, through redundancy. The scenario does not involve failures, but rather demand variation and paying in proportion to usage."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Elasticidade é ajustar automaticamente a capacidade à demanda nos dois sentidos, enquanto escalabilidade é a capacidade de crescer para suportar mais carga.",
      "en": "Elasticity is automatically adjusting capacity to demand in both directions, while scalability is the ability to grow to handle more load."
    }
  },
  {
    "id": 22,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "Well-Architected - Identidade, rastreabilidade e proteção de dados",
      "en": "Well-Architected - Identity, Traceability, and Data Protection"
    },
    "description": {
      "pt-BR": "Após uma revisão do AWS Well-Architected, a equipe recebeu estas recomendações: implementar uma base sólida de identidade, habilitar rastreabilidade, aplicar controles em todas as camadas e proteger dados em trânsito e em repouso. A qual pilar essas recomendações pertencem?",
      "en": "After an AWS Well-Architected review, the team received these recommendations: implement a strong identity foundation, enable traceability, apply controls at all layers, and protect data in transit and at rest. Which pillar do these recommendations belong to?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Confiabilidade",
          "en": "Reliability"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O pilar Confiabilidade foca em recuperação automática de falhas, testes de procedimentos de recuperação e gestão de capacidade. Identidade, rastreabilidade e proteção de dados não são seus princípios de design.",
          "en": "The Reliability pillar focuses on automatic recovery from failure, testing recovery procedures, and capacity management. Identity, traceability, and data protection are not its design principles."
        }
      },
      {
        "title": {
          "pt-BR": "Excelência Operacional",
          "en": "Operational Excellence"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Excelência Operacional trata de executar operações como código, fazer mudanças pequenas e reversíveis e aprender com falhas operacionais. Não é o pilar que define controles de identidade e proteção de dados.",
          "en": "Operational Excellence is about performing operations as code, making small reversible changes, and learning from operational failures. It is not the pillar that defines identity controls and data protection."
        }
      },
      {
        "title": {
          "pt-BR": "Eficiência de Performance",
          "en": "Performance Efficiency"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Eficiência de Performance trata de selecionar e usar os recursos computacionais de forma eficiente, como adotar serverless e experimentar com frequência. Não aborda identidade nem proteção de dados.",
          "en": "Performance Efficiency is about selecting and using computing resources efficiently, such as adopting serverless and experimenting often. It does not address identity or data protection."
        }
      },
      {
        "title": {
          "pt-BR": "Segurança",
          "en": "Security"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Base sólida de identidade, rastreabilidade, segurança em todas as camadas e proteção de dados em trânsito e em repouso são princípios de design do pilar Segurança do Well-Architected Framework.",
          "en": "A strong identity foundation, traceability, security at all layers, and protecting data in transit and at rest are design principles of the Security pillar of the Well-Architected Framework."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O pilar Segurança reúne os princípios de proteger informações, sistemas e ativos, incluindo identidade, rastreabilidade e proteção de dados.",
      "en": "The Security pillar gathers the principles for protecting information, systems, and assets, including identity, traceability, and data protection."
    }
  },
  {
    "id": 23,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "Well-Architected - Recuperação e capacidade",
      "en": "Well-Architected - Recovery and Capacity"
    },
    "description": {
      "pt-BR": "Uma empresa quer que sua carga de trabalho se recupere automaticamente de falhas, que os procedimentos de recuperação sejam testados regularmente e que a escala horizontal aumente a disponibilidade agregada. Qual pilar do Well-Architected Framework trata desses princípios?",
      "en": "A company wants its workload to recover automatically from failures, its recovery procedures to be tested regularly, and horizontal scaling to increase aggregate availability. Which Well-Architected Framework pillar covers these principles?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Confiabilidade",
          "en": "Reliability"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Recuperar-se automaticamente de falhas, testar procedimentos de recuperação, escalar horizontalmente e parar de adivinhar capacidade são princípios de design do pilar Confiabilidade.",
          "en": "Automatically recovering from failure, testing recovery procedures, scaling horizontally, and stopping guessing capacity are design principles of the Reliability pillar."
        }
      },
      {
        "title": {
          "pt-BR": "Eficiência de Performance",
          "en": "Performance Efficiency"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Eficiência de Performance trata de escolher os tipos e tamanhos certos de recursos e usar tecnologias avançadas para atender aos requisitos de desempenho. Recuperação de falhas e testes de recuperação pertencem a outro pilar.",
          "en": "Performance Efficiency is about choosing the right resource types and sizes and using advanced technologies to meet performance requirements. Failure recovery and recovery testing belong to another pillar."
        }
      },
      {
        "title": {
          "pt-BR": "Segurança",
          "en": "Security"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O pilar Segurança foca em identidade, rastreabilidade e proteção de dados. Embora a resposta a incidentes seja parte dele, recuperação automática de falhas e disponibilidade agregada não são seus princípios.",
          "en": "The Security pillar focuses on identity, traceability, and data protection. Although incident response is part of it, automatic failure recovery and aggregate availability are not its principles."
        }
      },
      {
        "title": {
          "pt-BR": "Sustentabilidade",
          "en": "Sustainability"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Sustentabilidade trata de reduzir o impacto ambiental das cargas de trabalho, maximizando a utilização dos recursos. Não define práticas de recuperação de falhas.",
          "en": "Sustainability is about reducing the environmental impact of workloads by maximizing resource utilization. It does not define failure recovery practices."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O pilar Confiabilidade garante que a carga de trabalho execute sua função corretamente e se recupere de falhas de forma consistente.",
      "en": "The Reliability pillar ensures the workload performs its intended function correctly and recovers from failures consistently."
    }
  },
  {
    "id": 24,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "Well-Architected - Escolha e evolução de recursos",
      "en": "Well-Architected - Choosing and Evolving Resources"
    },
    "description": {
      "pt-BR": "Uma equipe quer selecionar os tipos de instância e de banco mais adequados aos requisitos da aplicação, adotar arquiteturas serverless e revisar essas escolhas à medida que a AWS lança novas tecnologias. Qual pilar do Well-Architected Framework descreve essa abordagem?",
      "en": "A team wants to select the instance and database types best suited to the application's requirements, adopt serverless architectures, and revisit these choices as AWS launches new technologies. Which Well-Architected Framework pillar describes this approach?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Otimização de Custos",
          "en": "Cost Optimization"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Otimização de Custos foca em evitar gastos desnecessários, atribuir despesas e adotar o modelo de consumo. O cenário prioriza atender aos requisitos técnicos da aplicação com os recursos mais adequados, não reduzir a fatura.",
          "en": "Cost Optimization focuses on avoiding unnecessary spending, attributing expenses, and adopting a consumption model. The scenario prioritizes meeting the application's technical requirements with the most suitable resources, not reducing the bill."
        }
      },
      {
        "title": {
          "pt-BR": "Confiabilidade",
          "en": "Reliability"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Confiabilidade trata de recuperação de falhas e disponibilidade. Escolher os tipos de recurso de melhor desempenho e revisar essas escolhas com novas tecnologias não é seu foco.",
          "en": "Reliability is about failure recovery and availability. Choosing the best-performing resource types and revisiting those choices with new technologies is not its focus."
        }
      },
      {
        "title": {
          "pt-BR": "Eficiência de Performance",
          "en": "Performance Efficiency"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Eficiência de Performance trata de usar recursos computacionais de forma eficiente para atender aos requisitos e manter essa eficiência conforme a demanda e as tecnologias evoluem, incluindo usar serverless e experimentar com frequência.",
          "en": "Performance Efficiency is about using computing resources efficiently to meet requirements and maintaining that efficiency as demand and technologies evolve, including using serverless and experimenting often."
        }
      },
      {
        "title": {
          "pt-BR": "Excelência Operacional",
          "en": "Operational Excellence"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Excelência Operacional foca em processos de operação, automação de mudanças e melhoria contínua dos procedimentos. Não trata da seleção do tipo de recurso mais adequado ao desempenho da aplicação.",
          "en": "Operational Excellence focuses on operational processes, automating changes, and continuously improving procedures. It does not cover selecting the resource type best suited to the application's performance."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O pilar Eficiência de Performance orienta a escolha e a evolução dos recursos certos para atender aos requisitos de desempenho.",
      "en": "The Performance Efficiency pillar guides choosing and evolving the right resources to meet performance requirements."
    }
  },
  {
    "id": 25,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "Well-Architected - Gestão financeira da nuvem",
      "en": "Well-Architected - Cloud Financial Management"
    },
    "description": {
      "pt-BR": "Uma empresa quer implementar gestão financeira da nuvem, adotar o modelo de pagar apenas pelo que consome e atribuir os gastos de cada carga de trabalho aos respectivos donos de negócio. Qual pilar do Well-Architected Framework trata desses princípios?",
      "en": "A company wants to implement cloud financial management, adopt a pay-only-for-what-you-consume model, and attribute each workload's spending to its business owners. Which Well-Architected Framework pillar covers these principles?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Sustentabilidade",
          "en": "Sustainability"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Sustentabilidade busca reduzir o impacto ambiental, como a energia consumida pelas cargas de trabalho. Gestão financeira e atribuição de gastos a donos de negócio não são seus princípios.",
          "en": "Sustainability seeks to reduce environmental impact, such as the energy consumed by workloads. Financial management and attributing spending to business owners are not its principles."
        }
      },
      {
        "title": {
          "pt-BR": "Otimização de Custos",
          "en": "Cost Optimization"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Implementar gestão financeira da nuvem, adotar o modelo de consumo, medir a eficiência geral e analisar e atribuir despesas são princípios de design do pilar Otimização de Custos.",
          "en": "Implementing cloud financial management, adopting a consumption model, measuring overall efficiency, and analyzing and attributing expenditure are design principles of the Cost Optimization pillar."
        }
      },
      {
        "title": {
          "pt-BR": "Excelência Operacional",
          "en": "Operational Excellence"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Excelência Operacional trata de como operar e monitorar sistemas e melhorar processos. Embora use métricas, não é o pilar dedicado à gestão financeira e à atribuição de custos.",
          "en": "Operational Excellence is about how to operate and monitor systems and improve processes. Although it uses metrics, it is not the pillar dedicated to financial management and cost attribution."
        }
      },
      {
        "title": {
          "pt-BR": "Eficiência de Performance",
          "en": "Performance Efficiency"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Eficiência de Performance foca em usar os recursos certos para atender aos requisitos de desempenho. Atribuição de gastos e modelo de consumo pertencem a outro pilar.",
          "en": "Performance Efficiency focuses on using the right resources to meet performance requirements. Spending attribution and the consumption model belong to another pillar."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O pilar Otimização de Custos orienta a entregar valor de negócio ao menor preço, com gestão financeira e visibilidade dos gastos.",
      "en": "The Cost Optimization pillar guides delivering business value at the lowest price point, with financial management and spending visibility."
    }
  },
  {
    "id": 26,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "Well-Architected - Impacto ambiental",
      "en": "Well-Architected - Environmental Impact"
    },
    "description": {
      "pt-BR": "Uma empresa definiu metas para reduzir a pegada de carbono de suas cargas de trabalho. Ela quer maximizar a utilização dos recursos, preferir serviços gerenciados e adotar hardware mais eficiente em energia. Qual pilar do Well-Architected Framework trata desses objetivos?",
      "en": "A company has set goals to reduce the carbon footprint of its workloads. It wants to maximize resource utilization, prefer managed services, and adopt more energy-efficient hardware. Which Well-Architected Framework pillar covers these goals?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Otimização de Custos",
          "en": "Cost Optimization"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Maximizar a utilização costuma reduzir custos, mas o objetivo declarado é reduzir a pegada de carbono. Otimização de Custos mede sucesso em gasto, não em impacto ambiental.",
          "en": "Maximizing utilization often reduces costs, but the stated goal is to reduce the carbon footprint. Cost Optimization measures success in spending, not in environmental impact."
        }
      },
      {
        "title": {
          "pt-BR": "Eficiência de Performance",
          "en": "Performance Efficiency"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Eficiência de Performance busca atender aos requisitos de desempenho com os recursos certos. Metas de carbono e redução de impacto ambiental são tratadas por outro pilar.",
          "en": "Performance Efficiency seeks to meet performance requirements with the right resources. Carbon goals and reducing environmental impact are handled by another pillar."
        }
      },
      {
        "title": {
          "pt-BR": "Confiabilidade",
          "en": "Reliability"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Confiabilidade trata de disponibilidade e recuperação de falhas. Não define metas de redução de consumo de energia nem de pegada de carbono.",
          "en": "Reliability is about availability and failure recovery. It does not define goals for reducing energy consumption or carbon footprint."
        }
      },
      {
        "title": {
          "pt-BR": "Sustentabilidade",
          "en": "Sustainability"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O pilar Sustentabilidade foca em minimizar o impacto ambiental das cargas de trabalho, com princípios como estabelecer metas, maximizar a utilização, usar serviços gerenciados e adotar hardware mais eficiente.",
          "en": "The Sustainability pillar focuses on minimizing the environmental impact of workloads, with principles such as setting goals, maximizing utilization, using managed services, and adopting more efficient hardware."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O pilar Sustentabilidade trata de reduzir o impacto ambiental das cargas de trabalho executadas na nuvem.",
      "en": "The Sustainability pillar is about reducing the environmental impact of workloads running in the cloud."
    }
  },
  {
    "id": 27,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "Migração - Prazo curto e sem alterações",
      "en": "Migration - Short Deadline and No Changes"
    },
    "description": {
      "pt-BR": "Uma empresa precisa migrar 200 máquinas virtuais do seu data center para a AWS em três meses, antes do fim do contrato de hospedagem. Não há tempo nem orçamento para alterar o código ou a arquitetura das aplicações. Qual estratégia de migração é mais adequada?",
      "en": "A company needs to migrate 200 virtual machines from its data center to AWS within three months, before its hosting contract ends. There is no time or budget to change the applications' code or architecture. Which migration strategy is most appropriate?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Replatform, fazendo pequenas otimizações como trocar o banco por um serviço gerenciado",
          "en": "Replatform, making small optimizations such as moving the database to a managed service"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Replatform introduz ajustes pontuais para aproveitar a nuvem, o que exige algum esforço de alteração e teste. Com prazo curto e nenhum orçamento para mudanças, mover as VMs como estão é mais rápido.",
          "en": "Replatform introduces targeted adjustments to take advantage of the cloud, which requires some change and testing effort. With a short deadline and no budget for changes, moving the VMs as they are is faster."
        }
      },
      {
        "title": {
          "pt-BR": "Refactor, redesenhando as aplicações para usar serviços nativos da nuvem",
          "en": "Refactor, redesigning the applications to use cloud-native services"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Refactor exige reescrever ou reprojetar as aplicações, o que leva mais tempo e custa mais. Contradiz a restrição de não alterar código nem arquitetura dentro de três meses.",
          "en": "Refactor requires rewriting or redesigning the applications, which takes more time and costs more. It contradicts the constraint of not changing code or architecture within three months."
        }
      },
      {
        "title": {
          "pt-BR": "Rehost, movendo as máquinas virtuais para instâncias EC2 sem alterações",
          "en": "Rehost, moving the virtual machines to EC2 instances without changes"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Rehost (lift-and-shift) move as cargas como estão, sem alterar código, e pode ser automatizado com o AWS Application Migration Service. É a estratégia mais rápida para cumprir um prazo curto.",
          "en": "Rehost (lift-and-shift) moves workloads as they are, without changing code, and can be automated with AWS Application Migration Service. It is the fastest strategy to meet a short deadline."
        }
      },
      {
        "title": {
          "pt-BR": "Repurchase, substituindo as aplicações por produtos SaaS equivalentes",
          "en": "Repurchase, replacing the applications with equivalent SaaS products"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Repurchase troca a aplicação por outro produto, exigindo migração de dados, adaptação de processos e treinamento. Para 200 VMs em três meses sem mudanças, não é a opção viável.",
          "en": "Repurchase replaces the application with another product, requiring data migration, process adaptation, and training. For 200 VMs in three months without changes, it is not a viable option."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Rehost (lift-and-shift) é a estratégia mais rápida quando é preciso migrar sem alterar código ou arquitetura.",
      "en": "Rehost (lift-and-shift) is the fastest strategy when you need to migrate without changing code or architecture."
    }
  },
  {
    "id": 28,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "Migração - Modernização da arquitetura",
      "en": "Migration - Architecture Modernization"
    },
    "description": {
      "pt-BR": "Uma aplicação monolítica não consegue escalar partes específicas do sistema e cada nova funcionalidade leva meses para ser entregue. A empresa aceita investir um esforço significativo de desenvolvimento para dividi-la em microsserviços com serviços serverless. Qual estratégia de migração ela está adotando?",
      "en": "A monolithic application cannot scale specific parts of the system, and each new feature takes months to deliver. The company is willing to invest significant development effort to split it into microservices using serverless services. Which migration strategy is it adopting?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Rehost",
          "en": "Rehost"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Rehost move a aplicação como está para a nuvem. O monólito continuaria com as mesmas limitações de escala e de velocidade de entrega que motivaram o projeto.",
          "en": "Rehost moves the application to the cloud as is. The monolith would keep the same scaling and delivery-speed limitations that motivated the project."
        }
      },
      {
        "title": {
          "pt-BR": "Replatform",
          "en": "Replatform"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Replatform faz apenas otimizações pontuais, como trocar o banco por um serviço gerenciado, mantendo a arquitetura central. Não divide o monólito em microsserviços.",
          "en": "Replatform only makes targeted optimizations, such as moving the database to a managed service, while keeping the core architecture. It does not split the monolith into microservices."
        }
      },
      {
        "title": {
          "pt-BR": "Retain",
          "en": "Retain"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Retain significa manter a aplicação onde está, sem migrá-la por enquanto. Não resolveria os problemas de escala nem de agilidade descritos.",
          "en": "Retain means keeping the application where it is, without migrating it for now. It would not solve the scaling or agility problems described."
        }
      },
      {
        "title": {
          "pt-BR": "Refactor (Re-architect)",
          "en": "Refactor (Re-architect)"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Refactor/Re-architect reprojeta a aplicação usando recursos nativos da nuvem, como microsserviços e serverless. Exige mais esforço, mas é o que atende a necessidades de escala e agilidade difíceis de obter na arquitetura atual.",
          "en": "Refactor/Re-architect redesigns the application using cloud-native features such as microservices and serverless. It requires more effort, but it meets scaling and agility needs that are hard to achieve with the current architecture."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Refactor/Re-architect é usado quando o negócio precisa de recursos nativos da nuvem que a arquitetura atual não permite obter.",
      "en": "Refactor/Re-architect is used when the business needs cloud-native capabilities that the current architecture cannot deliver."
    }
  },
  {
    "id": 29,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "Cloud Adoption Framework - Perspectivas",
      "en": "Cloud Adoption Framework - Perspectives"
    },
    "description": {
      "pt-BR": "A iniciativa de nuvem de uma empresa está travada porque os funcionários não têm habilidades em nuvem e a cultura organizacional resiste às mudanças. Qual perspectiva do AWS Cloud Adoption Framework (AWS CAF) trata de capacitação, gestão de mudança organizacional e cultura?",
      "en": "A company's cloud initiative has stalled because employees lack cloud skills and the organizational culture resists change. Which AWS Cloud Adoption Framework (AWS CAF) perspective addresses training, organizational change management, and culture?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Perspectiva de Pessoas",
          "en": "People perspective"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "A perspectiva de Pessoas do AWS CAF cobre capacidades como evolução da cultura, gestão de mudança organizacional, capacitação da força de trabalho e design da organização.",
          "en": "The AWS CAF People perspective covers capabilities such as culture evolution, organizational change management, workforce transformation, and organization design."
        }
      },
      {
        "title": {
          "pt-BR": "Perspectiva de Governança",
          "en": "Governance perspective"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A perspectiva de Governança trata de gestão de programas e portfólio, gestão de riscos, benefícios e finanças da nuvem. Não é a que foca em habilidades e cultura das pessoas.",
          "en": "The Governance perspective covers program and portfolio management, risk management, benefits, and cloud financial management. It is not the one focused on people's skills and culture."
        }
      },
      {
        "title": {
          "pt-BR": "Perspectiva de Plataforma",
          "en": "Platform perspective"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A perspectiva de Plataforma trata da arquitetura e da construção da plataforma de nuvem, como provisionamento e engenharia de dados. Não aborda capacitação nem mudança cultural.",
          "en": "The Platform perspective covers the architecture and building of the cloud platform, such as provisioning and data engineering. It does not address training or cultural change."
        }
      },
      {
        "title": {
          "pt-BR": "Perspectiva de Operações",
          "en": "Operations perspective"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A perspectiva de Operações trata de observabilidade, gestão de incidentes e entrega dos serviços de nuvem no nível acordado. Não é voltada à transformação cultural e de habilidades.",
          "en": "The Operations perspective covers observability, incident management, and delivering cloud services at the agreed level. It is not aimed at cultural and skills transformation."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS CAF organiza a transformação em seis perspectivas; a de Pessoas é a que trata de cultura, capacitação e mudança organizacional.",
      "en": "The AWS CAF organizes transformation into six perspectives; the People perspective is the one that covers culture, training, and organizational change."
    }
  },
  {
    "id": 30,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "Economia da nuvem - Modelo de despesas",
      "en": "Cloud Economics - Expense Model"
    },
    "description": {
      "pt-BR": "A cada três anos, uma empresa faz uma grande compra antecipada de servidores, o que imobiliza caixa em equipamentos que muitas vezes ficam subutilizados. O diretor financeiro quer passar a pagar pela computação apenas quando ela for consumida. Qual vantagem da nuvem atende a esse objetivo?",
      "en": "Every three years, a company makes a large upfront server purchase, which ties up cash in equipment that often sits underutilized. The CFO wants to start paying for computing only when it is consumed. Which cloud advantage meets this goal?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Beneficiar-se de economias de escala massivas",
          "en": "Benefit from massive economies of scale"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Economias de escala explicam por que a AWS consegue cobrar preços unitários menores. A questão, porém, é sobre substituir o investimento antecipado por pagamento conforme o uso, que é outra vantagem.",
          "en": "Economies of scale explain why AWS can charge lower unit prices. The question, however, is about replacing the upfront investment with pay-as-you-go payments, which is a different advantage."
        }
      },
      {
        "title": {
          "pt-BR": "Parar de gastar dinheiro operando data centers",
          "en": "Stop spending money running data centers"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Essa vantagem trata de deixar de gastar esforço com tarefas como instalar racks, energia e refrigeração para focar no negócio. O cenário é sobre o modelo financeiro de compra antecipada, não sobre o esforço operacional.",
          "en": "This advantage is about no longer spending effort on tasks such as racking, power, and cooling so you can focus on the business. The scenario is about the upfront purchase financial model, not operational effort."
        }
      },
      {
        "title": {
          "pt-BR": "Trocar despesa de capital (CapEx) por despesa variável (OpEx)",
          "en": "Trade capital expense (CapEx) for variable expense (OpEx)"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Na nuvem, em vez de investir antecipadamente em data centers e servidores, a empresa paga apenas pelos recursos que consome, transformando CapEx em despesa operacional variável.",
          "en": "In the cloud, instead of investing upfront in data centers and servers, the company pays only for the resources it consumes, turning CapEx into a variable operating expense."
        }
      },
      {
        "title": {
          "pt-BR": "Tornar-se global em minutos",
          "en": "Go global in minutes"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Tornar-se global em minutos trata de implantar aplicações em várias regiões do mundo rapidamente. Não responde à necessidade de eliminar compras antecipadas de hardware.",
          "en": "Going global in minutes is about deploying applications in multiple regions around the world quickly. It does not address the need to eliminate upfront hardware purchases."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Trocar CapEx por OpEx significa substituir investimentos antecipados em infraestrutura por pagamento variável conforme o consumo.",
      "en": "Trading CapEx for OpEx means replacing upfront infrastructure investments with variable pay-as-you-consume payments."
    }
  },
  {
    "id": 31,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "Economia da nuvem - Preços unitários menores",
      "en": "Cloud Economics - Lower Unit Prices"
    },
    "description": {
      "pt-BR": "Um gestor pergunta por que a AWS consegue oferecer custos variáveis menores do que a empresa conseguiria operando seu próprio data center, e por que já reduziu seus preços diversas vezes ao longo dos anos. Qual vantagem da nuvem explica isso?",
      "en": "A manager asks why AWS can offer lower variable costs than the company could achieve running its own data center, and why AWS has reduced its prices many times over the years. Which cloud advantage explains this?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Parar de adivinhar a capacidade necessária",
          "en": "Stop guessing capacity"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Parar de adivinhar capacidade trata de evitar superprovisionamento ou falta de recursos, ajustando-os à demanda. Não explica por que o preço unitário da AWS é menor.",
          "en": "Stopping guessing capacity is about avoiding overprovisioning or running short of resources by adjusting them to demand. It does not explain why AWS's unit price is lower."
        }
      },
      {
        "title": {
          "pt-BR": "Beneficiar-se de economias de escala massivas",
          "en": "Benefit from massive economies of scale"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Como agrega o uso de centenas de milhares de clientes, a AWS obtém economias de escala que se traduzem em preços pagos conforme o uso menores e em reduções de preço repassadas aos clientes.",
          "en": "Because it aggregates usage from hundreds of thousands of customers, AWS achieves economies of scale that translate into lower pay-as-you-go prices and price reductions passed on to customers."
        }
      },
      {
        "title": {
          "pt-BR": "Aumentar a velocidade e a agilidade",
          "en": "Increase speed and agility"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Velocidade e agilidade tratam de disponibilizar recursos em minutos para que as equipes experimentem mais rápido. Não é a razão de a AWS ter custos unitários menores.",
          "en": "Speed and agility are about making resources available in minutes so teams can experiment faster. They are not the reason AWS has lower unit costs."
        }
      },
      {
        "title": {
          "pt-BR": "Trocar despesa de capital por despesa variável",
          "en": "Trade capital expense for variable expense"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Essa vantagem muda a forma de pagamento, de investimento antecipado para pagamento conforme o uso. Ela não explica, por si só, por que o preço de cada unidade consumida é menor.",
          "en": "This advantage changes the form of payment from upfront investment to pay-as-you-go. By itself, it does not explain why the price of each consumed unit is lower."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Economias de escala permitem à AWS oferecer preços unitários menores porque o uso de muitos clientes é agregado.",
      "en": "Economies of scale allow AWS to offer lower unit prices because usage from many customers is aggregated."
    }
  },
  {
    "id": 32,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "Recuperação de desastres - Ambiente reduzido em execução",
      "en": "Disaster Recovery - Scaled-Down Running Environment"
    },
    "description": {
      "pt-BR": "Uma empresa precisa de um RTO de poucos minutos para seu sistema de pedidos. Ela aceita manter em outra região uma cópia completa e funcional do ambiente de produção, rodando continuamente em capacidade reduzida, que pode receber tráfego imediatamente e ser ampliada durante o desastre. Qual estratégia de DR é essa?",
      "en": "A company needs an RTO of a few minutes for its ordering system. It accepts keeping in another region a complete, functional copy of the production environment, running continuously at reduced capacity, which can receive traffic immediately and be scaled up during a disaster. Which DR strategy is this?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Pilot light",
          "en": "Pilot light"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "No pilot light apenas o núcleo, normalmente os dados replicados, fica ativo; os servidores de aplicação ficam desligados e precisam ser iniciados. Isso não corresponde a um ambiente completo já em execução pronto para receber tráfego.",
          "en": "In pilot light only the core, usually the replicated data, is active; the application servers are off and must be started. This does not match a complete environment already running and ready to receive traffic."
        }
      },
      {
        "title": {
          "pt-BR": "Warm standby",
          "en": "Warm standby"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "No warm standby, uma versão reduzida porém totalmente funcional do ambiente roda sempre na região de recuperação. Ela pode atender tráfego de imediato e é escalada para a capacidade total durante o desastre.",
          "en": "In warm standby, a scaled-down but fully functional version of the environment always runs in the recovery region. It can serve traffic immediately and is scaled to full capacity during a disaster."
        }
      },
      {
        "title": {
          "pt-BR": "Backup e restauração",
          "en": "Backup and restore"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Backup e restauração não mantém ambiente em execução; os recursos são recriados a partir dos backups após o desastre. O RTO costuma ser de horas, não de poucos minutos. RTO (Recovery Time Objective, objetivo de tempo de recuperação) é o tempo máximo aceitável para restaurar o serviço após uma falha.",
          "en": "Backup and restore does not keep a running environment; resources are recreated from backups after the disaster. The RTO is usually hours, not a few minutes. RTO (Recovery Time Objective) is the maximum acceptable time to restore service after a failure."
        }
      },
      {
        "title": {
          "pt-BR": "Multi-site ativo/ativo",
          "en": "Multi-site active/active"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "No multi-site ativo/ativo as duas regiões atendem tráfego de produção em capacidade total ao mesmo tempo. O cenário descreve um ambiente de recuperação em capacidade reduzida, que é mais barato.",
          "en": "In multi-site active/active both regions serve production traffic at full capacity at the same time. The scenario describes a recovery environment at reduced capacity, which is cheaper."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Warm standby mantém uma cópia reduzida e funcional do ambiente sempre em execução, equilibrando custo e RTO baixo. RTO (Recovery Time Objective, objetivo de tempo de recuperação) é o tempo máximo aceitável para restaurar o serviço após uma falha; RPO (Recovery Point Objective, objetivo de ponto de recuperação) é a quantidade máxima de dados, medida em tempo, que se aceita perder (por exemplo, RPO de 5 minutos significa perder no máximo os últimos 5 minutos de dados).",
      "en": "Warm standby keeps a scaled-down, functional copy of the environment always running, balancing cost and a low RTO. RTO (Recovery Time Objective) is the maximum acceptable time to restore service after a failure; RPO (Recovery Point Objective) is the maximum amount of data, measured in time, that you accept losing (for example, an RPO of 5 minutes means losing at most the last 5 minutes of data)."
    }
  },
  {
    "id": 33,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "Recuperação de desastres - RTO e RPO próximos de zero",
      "en": "Disaster Recovery - Near-Zero RTO and RPO"
    },
    "description": {
      "pt-BR": "Uma plataforma de pagamentos não pode ficar indisponível nem perder transações, exigindo RTO e RPO próximos de zero. A empresa aceita pagar mais para que duas regiões atendam tráfego de produção simultaneamente. Qual estratégia de DR é mais adequada?",
      "en": "A payments platform cannot go down or lose transactions, requiring near-zero RTO and RPO. The company is willing to pay more so that two regions serve production traffic simultaneously. Which DR strategy is most appropriate?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Warm standby",
          "en": "Warm standby"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "No warm standby a região de recuperação roda em capacidade reduzida e precisa ser escalada e receber o failover. Isso gera um RTO de minutos, e a região secundária não atende a produção simultaneamente. RTO (Recovery Time Objective, objetivo de tempo de recuperação) é o tempo máximo aceitável para restaurar o serviço após uma falha.",
          "en": "In warm standby the recovery region runs at reduced capacity and must be scaled up and receive the failover. This produces an RTO of minutes, and the secondary region does not serve production simultaneously. RTO (Recovery Time Objective) is the maximum acceptable time to restore service after a failure."
        }
      },
      {
        "title": {
          "pt-BR": "Pilot light",
          "en": "Pilot light"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "No pilot light apenas os dados ficam replicados e os servidores de aplicação precisam ser iniciados durante o desastre. O RTO é maior e não há atendimento simultâneo em duas regiões. RTO (Recovery Time Objective, objetivo de tempo de recuperação) é o tempo máximo aceitável para restaurar o serviço após uma falha.",
          "en": "In pilot light only the data is replicated, and the application servers must be started during the disaster. The RTO is higher, and there is no simultaneous serving from two regions. RTO (Recovery Time Objective) is the maximum acceptable time to restore service after a failure."
        }
      },
      {
        "title": {
          "pt-BR": "Backup e restauração",
          "en": "Backup and restore"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Backup e restauração é a estratégia mais barata, mas o RPO depende da frequência dos backups e o RTO costuma ser de horas. Não atende a requisitos próximos de zero. RTO (Recovery Time Objective, objetivo de tempo de recuperação) é o tempo máximo aceitável para restaurar o serviço após uma falha. RPO (Recovery Point Objective, objetivo de ponto de recuperação) é a quantidade máxima de dados, medida em tempo, que se aceita perder.",
          "en": "Backup and restore is the cheapest strategy, but the RPO depends on backup frequency and the RTO is usually hours. It does not meet near-zero requirements. RTO (Recovery Time Objective) is the maximum acceptable time to restore service after a failure. RPO (Recovery Point Objective) is the maximum amount of data, measured in time, that you accept losing."
        }
      },
      {
        "title": {
          "pt-BR": "Multi-site ativo/ativo",
          "en": "Multi-site active/active"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "No multi-site ativo/ativo a carga roda em capacidade total em várias regiões ao mesmo tempo. Se uma região falha, o tráfego segue nas demais, oferecendo o menor RTO e RPO, com o maior custo. RTO (Recovery Time Objective, objetivo de tempo de recuperação) é o tempo máximo aceitável para restaurar o serviço após uma falha; RPO (Recovery Point Objective, objetivo de ponto de recuperação) é a quantidade máxima de dados, medida em tempo, que se aceita perder (por exemplo, RPO de 5 minutos significa perder no máximo os últimos 5 minutos de dados).",
          "en": "In multi-site active/active the workload runs at full capacity in multiple regions at the same time. If one region fails, traffic continues in the others, providing the lowest RTO and RPO, at the highest cost. RTO (Recovery Time Objective) is the maximum acceptable time to restore service after a failure; RPO (Recovery Point Objective) is the maximum amount of data, measured in time, that you accept losing (for example, an RPO of 5 minutes means losing at most the last 5 minutes of data)."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Multi-site ativo/ativo é a estratégia de recuperação de desastres (DR) com menor RTO e RPO, pois várias regiões atendem produção ao mesmo tempo, sem etapa de failover nem perda relevante de dados. RTO (Recovery Time Objective, objetivo de tempo de recuperação) é o tempo máximo aceitável para restaurar o serviço após uma falha; RPO (Recovery Point Objective, objetivo de ponto de recuperação) é a quantidade máxima de dados, medida em tempo, que se aceita perder (por exemplo, RPO de 5 minutos significa perder no máximo os últimos 5 minutos de dados).",
      "en": "Multi-site active/active is the disaster recovery (DR) strategy with the lowest RTO and RPO, because multiple regions serve production at the same time, with no failover step and no meaningful data loss. RTO (Recovery Time Objective) is the maximum acceptable time to restore service after a failure; RPO (Recovery Point Objective) is the maximum amount of data, measured in time, that you accept losing (for example, an RPO of 5 minutes means losing at most the last 5 minutes of data)."
    }
  },
  {
    "id": 34,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "Benefícios da nuvem - Expansão geográfica",
      "en": "Cloud Benefits - Geographic Expansion"
    },
    "description": {
      "pt-BR": "Uma startup brasileira quer lançar sua aplicação para usuários na Europa e na Ásia na mesma semana, com baixa latência para esses clientes, sem construir nem alugar data centers nessas regiões. Qual vantagem da nuvem torna isso possível?",
      "en": "A Brazilian startup wants to launch its application to users in Europe and Asia in the same week, with low latency for those customers, without building or leasing data centers in those regions. Which cloud advantage makes this possible?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Beneficiar-se de economias de escala massivas",
          "en": "Benefit from massive economies of scale"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Economias de escala explicam os preços unitários menores da AWS. Não tratam da capacidade de implantar a aplicação rapidamente em outros continentes.",
          "en": "Economies of scale explain AWS's lower unit prices. They do not address the ability to quickly deploy the application on other continents."
        }
      },
      {
        "title": {
          "pt-BR": "Tornar-se global em minutos",
          "en": "Go global in minutes"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Com Regiões da AWS espalhadas pelo mundo, a empresa pode implantar a aplicação perto dos usuários em outros continentes em poucos cliques, sem construir infraestrutura física própria.",
          "en": "With AWS Regions spread around the world, the company can deploy the application close to users on other continents in a few clicks, without building its own physical infrastructure."
        }
      },
      {
        "title": {
          "pt-BR": "Parar de adivinhar a capacidade necessária",
          "en": "Stop guessing capacity"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Parar de adivinhar capacidade trata de ajustar a quantidade de recursos à demanda real. Não resolve a necessidade de estar geograficamente perto de usuários em outros continentes.",
          "en": "Stopping guessing capacity is about adjusting the amount of resources to actual demand. It does not solve the need to be geographically close to users on other continents."
        }
      },
      {
        "title": {
          "pt-BR": "Trocar despesa de capital por despesa variável",
          "en": "Trade capital expense for variable expense"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Essa vantagem trata do modelo de pagamento conforme o uso. Embora evite o investimento em data centers, não é a vantagem que descreve a implantação rápida em várias regiões do mundo.",
          "en": "This advantage is about the pay-as-you-go payment model. Although it avoids investing in data centers, it is not the advantage that describes rapid deployment in multiple regions of the world."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Tornar-se global em minutos permite implantar aplicações em várias regiões do mundo rapidamente, oferecendo baixa latência aos usuários.",
      "en": "Going global in minutes allows deploying applications in multiple regions of the world quickly, providing low latency to users."
    }
  },
  {
    "id": 35,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "IAM - Credenciais para aplicações no EC2",
      "en": "IAM - Credentials for Applications on EC2"
    },
    "description": {
      "pt-BR": "Uma aplicação executada em uma instância EC2 precisa ler objetos de um bucket S3. Um desenvolvedor sugeriu criar credenciais para a aplicação acessar o bucket. Qual é a forma mais segura de fornecer essas permissões?",
      "en": "An application running on an EC2 instance needs to read objects from an S3 bucket. A developer suggested creating credentials for the application to access the bucket. What is the most secure way to provide these permissions?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Access keys de um IAM user gravadas no arquivo de configuração da aplicação",
          "en": "IAM user access keys written in the application's configuration file"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Access keys de IAM user são credenciais de longo prazo. Gravadas em arquivo, podem vazar em repositórios ou backups e continuam válidas até alguém rotacioná-las manualmente.",
          "en": "IAM user access keys are long-term credentials. Written in a file, they can leak through repositories or backups and remain valid until someone rotates them manually."
        }
      },
      {
        "title": {
          "pt-BR": "Access keys de um IAM user definidas como variáveis de ambiente da instância",
          "en": "IAM user access keys set as environment variables on the instance"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Mudar o local de armazenamento não muda a natureza da credencial: continuam sendo chaves de longo prazo que precisam ser distribuídas e rotacionadas manualmente, com risco de exposição.",
          "en": "Changing where they are stored does not change the nature of the credential: they are still long-term keys that must be distributed and rotated manually, with exposure risk."
        }
      },
      {
        "title": {
          "pt-BR": "Access keys de um IAM user guardadas no Secrets Manager e rotacionadas manualmente",
          "en": "IAM user access keys stored in Secrets Manager and rotated manually"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Guardar as chaves no Secrets Manager melhora o armazenamento, mas a aplicação ainda depende de credenciais de longo prazo de um usuário. Para serviços AWS acessando outros serviços, a boa prática é evitar chaves de longo prazo.",
          "en": "Storing the keys in Secrets Manager improves storage, but the application still depends on a user's long-term credentials. For AWS services accessing other services, the best practice is to avoid long-term keys."
        }
      },
      {
        "title": {
          "pt-BR": "Uma IAM role associada à instância EC2 por meio de um instance profile",
          "en": "An IAM role attached to the EC2 instance through an instance profile"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Uma IAM role associada à instância fornece credenciais temporárias, entregues pelo serviço de metadados e rotacionadas automaticamente. Nenhuma chave de longo prazo precisa ser armazenada ou distribuída.",
          "en": "An IAM role attached to the instance provides temporary credentials, delivered by the metadata service and rotated automatically. No long-term keys need to be stored or distributed."
        }
      }
    ],
    "explanation": {
      "pt-BR": "IAM roles fornecem credenciais temporárias e são a forma recomendada de dar permissões a aplicações em serviços AWS, em vez de access keys de longo prazo de IAM users.",
      "en": "IAM roles provide temporary credentials and are the recommended way to grant permissions to applications on AWS services, instead of long-term IAM user access keys."
    }
  },
  {
    "id": 36,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "IAM - Acesso entre contas a um bucket",
      "en": "IAM - Cross-Account Access to a Bucket"
    },
    "description": {
      "pt-BR": "Uma empresa precisa permitir que a conta AWS de um parceiro leia objetos de um bucket S3 específico, sem criar usuários para o parceiro dentro da conta da empresa. Qual tipo de política atende a esse requisito?",
      "en": "A company needs to allow a partner's AWS account to read objects from a specific S3 bucket, without creating users for the partner inside the company's account. Which type of policy meets this requirement?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Uma bucket policy que concede leitura à conta do parceiro como principal",
          "en": "A bucket policy that grants read access to the partner's account as a principal"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Bucket policies são políticas baseadas em recurso: ficam anexadas ao bucket e especificam quais principals, inclusive de outras contas, podem acessá-lo. O parceiro usa suas próprias identidades.",
          "en": "Bucket policies are resource-based policies: they are attached to the bucket and specify which principals, including those from other accounts, can access it. The partner uses its own identities."
        }
      },
      {
        "title": {
          "pt-BR": "Uma política baseada em identidade anexada a um novo IAM user da empresa",
          "en": "An identity-based policy attached to a new IAM user in the company's account"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Políticas baseadas em identidade só podem ser anexadas a usuários, grupos ou roles da própria conta. Isso exigiria criar um usuário para o parceiro e compartilhar suas credenciais, o que o requisito proíbe.",
          "en": "Identity-based policies can only be attached to users, groups, or roles in the same account. This would require creating a user for the partner and sharing its credentials, which the requirement forbids."
        }
      },
      {
        "title": {
          "pt-BR": "Uma Service Control Policy aplicada à conta da empresa no AWS Organizations",
          "en": "A Service Control Policy applied to the company's account in AWS Organizations"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "SCPs apenas definem o máximo de permissões disponível para as contas da organização; elas nunca concedem acesso. Não permitiriam que uma conta externa lesse o bucket.",
          "en": "SCPs only define the maximum permissions available to accounts in the organization; they never grant access. They would not allow an external account to read the bucket."
        }
      },
      {
        "title": {
          "pt-BR": "Um permissions boundary anexado às roles que acessam o bucket",
          "en": "A permissions boundary attached to the roles that access the bucket"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Permissions boundaries limitam o máximo de permissões que uma identidade da conta pode ter, mas não concedem acesso por si só e não se aplicam a principals de outra conta.",
          "en": "Permissions boundaries limit the maximum permissions an identity in the account can have, but they do not grant access by themselves and do not apply to principals from another account."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Políticas baseadas em recurso, como bucket policies, ficam anexadas ao recurso e podem conceder acesso a principals de outras contas.",
      "en": "Resource-based policies, such as bucket policies, are attached to the resource and can grant access to principals from other accounts."
    }
  },
  {
    "id": 37,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Conta root - Boas práticas",
      "en": "Root Account - Best Practices"
    },
    "description": {
      "pt-BR": "Uma empresa acabou de criar sua conta AWS e vai começar a provisionar recursos. Qual prática é recomendada em relação ao usuário root da conta?",
      "en": "A company has just created its AWS account and will start provisioning resources. Which practice is recommended regarding the account's root user?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Criar access keys para o root e usá-las nos scripts de automação da equipe",
          "en": "Create access keys for the root user and use them in the team's automation scripts"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O root tem acesso irrestrito que não pode ser limitado por políticas IAM. Access keys do root em scripts ampliam muito o impacto de um vazamento; a recomendação é não criar access keys para o root.",
          "en": "The root user has unrestricted access that cannot be limited by IAM policies. Root access keys in scripts greatly increase the impact of a leak; the recommendation is not to create access keys for root."
        }
      },
      {
        "title": {
          "pt-BR": "Ativar MFA no root e usá-lo apenas nas tarefas que exigem esse usuário",
          "en": "Enable MFA on the root user and use it only for tasks that require that user"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "A boa prática é proteger o root com MFA e senha forte, criar identidades administrativas separadas para o trabalho diário e usar o root somente em tarefas que só ele pode executar, como alterar o plano de suporte.",
          "en": "The best practice is to protect root with MFA and a strong password, create separate administrative identities for daily work, and use root only for tasks only it can perform, such as changing the support plan."
        }
      },
      {
        "title": {
          "pt-BR": "Compartilhar a senha do root entre os administradores para acessos de emergência",
          "en": "Share the root password among administrators for emergency access"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Compartilhar a senha do root elimina a rastreabilidade de quem fez cada ação e aumenta a chance de vazamento. Cada administrador deve ter sua própria identidade com as permissões necessárias.",
          "en": "Sharing the root password removes traceability of who performed each action and increases the chance of a leak. Each administrator should have their own identity with the necessary permissions."
        }
      },
      {
        "title": {
          "pt-BR": "Usar o root nas tarefas diárias, desde que a senha seja trocada todo mês",
          "en": "Use root for daily tasks, as long as the password is changed every month"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Trocar a senha com frequência não compensa o risco de usar no dia a dia uma identidade com poderes irrestritos. A recomendação é não usar o root em tarefas rotineiras.",
          "en": "Changing the password frequently does not offset the risk of using an identity with unrestricted power for daily work. The recommendation is not to use root for routine tasks."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O usuário root deve ser protegido com MFA, não deve ter access keys e só deve ser usado nas poucas tarefas que o exigem.",
      "en": "The root user should be protected with MFA, should not have access keys, and should be used only for the few tasks that require it."
    }
  },
  {
    "id": 38,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Segurança de rede - Bloqueio na sub-rede",
      "en": "Network Security - Blocking at the Subnet"
    },
    "description": {
      "pt-BR": "A aplicação pública de uma empresa está recebendo tráfego malicioso de um intervalo de IPs específico. A equipe quer bloquear explicitamente esse intervalo no nível da sub-rede, para todas as instâncias, mantendo o acesso do restante da internet. Qual recurso deve usar?",
      "en": "A company's public application is receiving malicious traffic from a specific IP range. The team wants to explicitly block that range at the subnet level, for all instances, while keeping access for the rest of the internet. Which feature should it use?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Security Groups das instâncias, restringindo as regras de entrada",
          "en": "The instances' Security Groups, restricting the inbound rules"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Security Groups atuam no nível da instância, são stateful e só suportam regras de permissão. Não é possível negar explicitamente um intervalo enquanto se permite o restante da internet.",
          "en": "Security Groups operate at the instance level, are stateful, and only support allow rules. It is not possible to explicitly deny a range while allowing the rest of the internet."
        }
      },
      {
        "title": {
          "pt-BR": "Uma Network ACL associada à sub-rede, com uma regra de negação",
          "en": "A Network ACL associated with the subnet, with a deny rule"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Network ACLs atuam no nível da sub-rede, são stateless e suportam regras de permissão e de negação avaliadas por ordem numérica. Uma regra de negação bloqueia o intervalo para todas as instâncias da sub-rede.",
          "en": "Network ACLs operate at the subnet level, are stateless, and support both allow and deny rules evaluated in numerical order. A deny rule blocks the range for all instances in the subnet."
        }
      },
      {
        "title": {
          "pt-BR": "A tabela de rotas da sub-rede, sem rota para o intervalo de IPs",
          "en": "The subnet's route table, with no route to the IP range"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Tabelas de rotas definem para onde o tráfego de saída é encaminhado, não filtram tráfego de entrada pela origem. Remover uma rota não impede que os pacotes maliciosos cheguem às instâncias.",
          "en": "Route tables define where outbound traffic is forwarded; they do not filter inbound traffic by source. Removing a route does not prevent the malicious packets from reaching the instances."
        }
      },
      {
        "title": {
          "pt-BR": "Mover as instâncias para uma sub-rede privada com NAT Gateway",
          "en": "Move the instances to a private subnet with a NAT Gateway"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Em uma sub-rede privada as instâncias deixam de receber conexões iniciadas pela internet; o NAT Gateway só permite saída. Isso bloquearia todos os usuários legítimos, não apenas o intervalo malicioso.",
          "en": "In a private subnet the instances no longer receive connections initiated from the internet; the NAT Gateway only allows outbound traffic. This would block all legitimate users, not just the malicious range."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Network ACLs são stateless, atuam na sub-rede e permitem regras de negação; Security Groups são stateful, atuam na instância e só têm regras de permissão.",
      "en": "Network ACLs are stateless, operate at the subnet, and allow deny rules; Security Groups are stateful, operate at the instance, and only have allow rules."
    }
  },
  {
    "id": 39,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Governança multi-conta - Guardrails",
      "en": "Multi-Account Governance - Guardrails"
    },
    "description": {
      "pt-BR": "Uma empresa com dezenas de contas no AWS Organizations quer garantir que nenhuma conta, nem mesmo seus administradores, consiga desativar o AWS CloudTrail ou usar regiões fora da Europa. Qual recurso deve ser usado?",
      "en": "A company with dozens of accounts in AWS Organizations wants to ensure that no account, not even its administrators, can disable AWS CloudTrail or use regions outside Europe. Which feature should be used?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Políticas IAM restritivas criadas em cada conta membro",
          "en": "Restrictive IAM policies created in each member account"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Políticas IAM são gerenciadas dentro de cada conta, então os administradores locais poderiam alterá-las ou removê-las. Não oferecem um controle central que eles não consigam contornar.",
          "en": "IAM policies are managed within each account, so local administrators could change or remove them. They do not provide a central control that they cannot bypass."
        }
      },
      {
        "title": {
          "pt-BR": "Regras do AWS Config aplicadas em todas as contas",
          "en": "AWS Config rules applied in all accounts"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Regras do AWS Config avaliam e reportam recursos não conformes depois que a mudança acontece. Elas detectam o problema, mas não impedem a chamada de API que desativa o CloudTrail.",
          "en": "AWS Config rules evaluate and report noncompliant resources after the change happens. They detect the problem but do not prevent the API call that disables CloudTrail."
        }
      },
      {
        "title": {
          "pt-BR": "Service Control Policies (SCPs) aplicadas às unidades organizacionais",
          "en": "Service Control Policies (SCPs) applied to the organizational units"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "SCPs definem o máximo de permissões disponível para as contas da organização e se aplicam a todos os usuários e roles delas, inclusive administradores. Uma negação na SCP não pode ser contornada dentro da conta.",
          "en": "SCPs define the maximum permissions available to the organization's accounts and apply to all their users and roles, including administrators. A deny in an SCP cannot be bypassed within the account."
        }
      },
      {
        "title": {
          "pt-BR": "Permissions boundaries anexados aos usuários administradores",
          "en": "Permissions boundaries attached to the administrator users"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Permissions boundaries são definidos por identidade dentro de cada conta. Um administrador com permissões suficientes poderia removê-los ou criar novas identidades sem eles.",
          "en": "Permissions boundaries are set per identity within each account. An administrator with sufficient permissions could remove them or create new identities without them."
        }
      }
    ],
    "explanation": {
      "pt-BR": "SCPs são guardrails centrais do AWS Organizations que limitam o que qualquer identidade das contas membro pode fazer.",
      "en": "SCPs are central AWS Organizations guardrails that limit what any identity in the member accounts can do."
    }
  },
  {
    "id": 40,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Conformidade - Relatórios de auditoria da AWS",
      "en": "Compliance - AWS Audit Reports"
    },
    "description": {
      "pt-BR": "Um auditor externo pediu à empresa cópias dos relatórios SOC 2 e dos certificados ISO 27001 da AWS para validar os controles da infraestrutura do provedor. Onde a empresa obtém esses documentos por conta própria?",
      "en": "An external auditor asked the company for copies of AWS's SOC 2 reports and ISO 27001 certificates to validate the provider's infrastructure controls. Where can the company obtain these documents on its own?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Audit Manager",
          "en": "AWS Audit Manager"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Audit Manager automatiza a coleta de evidências sobre o uso que o cliente faz da AWS para suas próprias auditorias. Não é o portal que disponibiliza os relatórios de conformidade da própria AWS.",
          "en": "AWS Audit Manager automates evidence collection about the customer's own AWS usage for their audits. It is not the portal that provides AWS's own compliance reports."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Security Hub",
          "en": "AWS Security Hub"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Security Hub agrega descobertas de segurança e verifica a conta do cliente contra padrões de boas práticas. Não oferece download dos relatórios SOC nem dos certificados ISO da AWS.",
          "en": "Security Hub aggregates security findings and checks the customer's account against best-practice standards. It does not offer downloads of AWS's SOC reports or ISO certificates."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Config",
          "en": "AWS Config"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Config registra e avalia a configuração dos recursos do cliente. Ele não fornece documentos de auditoria de terceiros sobre a infraestrutura da AWS.",
          "en": "AWS Config records and evaluates the configuration of the customer's resources. It does not provide third-party audit documents about AWS's infrastructure."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Artifact",
          "en": "AWS Artifact"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Artifact é o portal self-service para baixar relatórios de conformidade da AWS, como SOC e certificações ISO, e para aceitar acordos como o BAA.",
          "en": "AWS Artifact is the self-service portal to download AWS compliance reports, such as SOC reports and ISO certifications, and to accept agreements such as the BAA."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Artifact oferece acesso sob demanda aos relatórios de conformidade e acordos da AWS.",
      "en": "AWS Artifact provides on-demand access to AWS compliance reports and agreements."
    }
  },
  {
    "id": 41,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Proteção contra DDoS - Suporte especializado",
      "en": "DDoS Protection - Specialized Support"
    },
    "description": {
      "pt-BR": "Uma empresa de jogos online sofreu ataques DDoS de grande escala. Ela quer detecção avançada, acesso 24/7 a uma equipe especializada de resposta a DDoS e proteção de custos contra cobranças de escalonamento causadas pelos ataques. Qual solução atende?",
      "en": "An online gaming company suffered large-scale DDoS attacks. It wants advanced detection, 24/7 access to a specialized DDoS response team, and cost protection against scaling charges caused by the attacks. Which solution meets this?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Shield Advanced",
          "en": "AWS Shield Advanced"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Shield Advanced adiciona detecção e mitigação avançadas, acesso 24/7 ao Shield Response Team e proteção de custos para cobranças de escalonamento de recursos protegidos durante ataques DDoS.",
          "en": "Shield Advanced adds advanced detection and mitigation, 24/7 access to the Shield Response Team, and cost protection for scaling charges on protected resources during DDoS attacks."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Shield Standard",
          "en": "AWS Shield Standard"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Shield Standard é automático e sem custo, protegendo contra os ataques mais comuns nas camadas de rede e transporte. Não inclui acesso à equipe de resposta nem proteção de custos.",
          "en": "Shield Standard is automatic and free, protecting against the most common network and transport layer attacks. It does not include access to the response team or cost protection."
        }
      },
      {
        "title": {
          "pt-BR": "AWS WAF com regras de limite de taxa",
          "en": "AWS WAF with rate-based rules"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Regras de limite de taxa do WAF ajudam a mitigar inundações de requisições HTTP, mas o WAF sozinho não oferece equipe especializada 24/7 nem proteção de custos contra ataques.",
          "en": "WAF rate-based rules help mitigate HTTP request floods, but WAF alone does not offer a 24/7 specialized team or cost protection against attacks."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon GuardDuty com proteção de rede",
          "en": "Amazon GuardDuty with network protection"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O GuardDuty detecta ameaças analisando logs e gera descobertas, mas não mitiga ataques DDoS nem oferece equipe de resposta ou proteção de custos.",
          "en": "GuardDuty detects threats by analyzing logs and generates findings, but it does not mitigate DDoS attacks or offer a response team or cost protection."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Shield Standard é gratuito e automático; o Shield Advanced é pago e adiciona equipe de resposta 24/7, detecção avançada e proteção de custos.",
      "en": "Shield Standard is free and automatic; Shield Advanced is paid and adds a 24/7 response team, advanced detection, and cost protection."
    }
  },
  {
    "id": 42,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Segurança de aplicações web - Filtragem de requisições",
      "en": "Web Application Security - Request Filtering"
    },
    "description": {
      "pt-BR": "Uma aplicação web atrás de um Application Load Balancer está recebendo requisições com tentativas de SQL injection e cross-site scripting. A equipe quer bloquear essas requisições com base no conteúdo HTTP antes que cheguem à aplicação. Qual serviço deve usar?",
      "en": "A web application behind an Application Load Balancer is receiving requests containing SQL injection and cross-site scripting attempts. The team wants to block these requests based on HTTP content before they reach the application. Which service should it use?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Shield Standard",
          "en": "AWS Shield Standard"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Shield Standard protege contra ataques DDoS comuns nas camadas de rede e transporte. Não inspeciona o conteúdo das requisições HTTP em busca de padrões de SQL injection ou XSS.",
          "en": "Shield Standard protects against common DDoS attacks at the network and transport layers. It does not inspect HTTP request content for SQL injection or XSS patterns."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Inspector",
          "en": "Amazon Inspector"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Inspector procura vulnerabilidades de software e exposição de rede em instâncias EC2, imagens de container e funções Lambda. Ele não bloqueia requisições em tempo real.",
          "en": "Inspector looks for software vulnerabilities and network exposure in EC2 instances, container images, and Lambda functions. It does not block requests in real time."
        }
      },
      {
        "title": {
          "pt-BR": "AWS WAF",
          "en": "AWS WAF"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS WAF é um firewall de aplicação web que se integra ao ALB, CloudFront e API Gateway, com regras que inspecionam requisições HTTP e bloqueiam padrões como SQL injection e XSS.",
          "en": "AWS WAF is a web application firewall that integrates with ALB, CloudFront, and API Gateway, with rules that inspect HTTP requests and block patterns such as SQL injection and XSS."
        }
      },
      {
        "title": {
          "pt-BR": "Security Group do Application Load Balancer",
          "en": "The Application Load Balancer's Security Group"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Security Groups filtram por protocolo, porta e origem. Eles não analisam o conteúdo das requisições HTTP, então não distinguem uma requisição legítima de uma tentativa de SQL injection na mesma porta.",
          "en": "Security Groups filter by protocol, port, and source. They do not analyze HTTP request content, so they cannot distinguish a legitimate request from a SQL injection attempt on the same port."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS WAF protege aplicações web filtrando requisições HTTP com regras contra ataques como SQL injection e XSS.",
      "en": "AWS WAF protects web applications by filtering HTTP requests with rules against attacks such as SQL injection and XSS."
    }
  },
  {
    "id": 43,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Detecção de ameaças - Monitoramento contínuo",
      "en": "Threat Detection - Continuous Monitoring"
    },
    "description": {
      "pt-BR": "Uma empresa quer detectar continuamente atividades maliciosas nas suas contas, como instâncias se comunicando com endereços de mineração de criptomoedas ou chamadas de API incomuns, analisando CloudTrail, VPC Flow Logs e logs de DNS, sem instalar agentes. Qual serviço atende?",
      "en": "A company wants to continuously detect malicious activity in its accounts, such as instances communicating with cryptocurrency-mining addresses or unusual API calls, by analyzing CloudTrail, VPC Flow Logs, and DNS logs, without installing agents. Which service meets this?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon Inspector",
          "en": "Amazon Inspector"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Inspector avalia cargas de trabalho em busca de vulnerabilidades de software conhecidas (CVEs) e exposição de rede. Não analisa CloudTrail e logs de DNS para detectar comportamento malicioso em andamento.",
          "en": "Inspector assesses workloads for known software vulnerabilities (CVEs) and network exposure. It does not analyze CloudTrail and DNS logs to detect ongoing malicious behavior."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon GuardDuty",
          "en": "Amazon GuardDuty"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O GuardDuty é um serviço de detecção de ameaças que usa inteligência de ameaças e machine learning sobre CloudTrail, VPC Flow Logs e logs de DNS para identificar atividades maliciosas, sem agentes.",
          "en": "GuardDuty is a threat detection service that uses threat intelligence and machine learning on CloudTrail, VPC Flow Logs, and DNS logs to identify malicious activity, without agents."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Macie",
          "en": "Amazon Macie"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Macie descobre e classifica dados sensíveis armazenados no S3. Não monitora tráfego de rede nem chamadas de API em busca de ameaças.",
          "en": "Macie discovers and classifies sensitive data stored in S3. It does not monitor network traffic or API calls for threats."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Config",
          "en": "AWS Config"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Config registra configurações de recursos e avalia a conformidade com regras. Não detecta comunicação com endereços maliciosos nem padrões anômalos de API.",
          "en": "AWS Config records resource configurations and evaluates compliance with rules. It does not detect communication with malicious addresses or anomalous API patterns."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Amazon GuardDuty faz detecção inteligente e contínua de ameaças analisando logs da conta, sem necessidade de agentes.",
      "en": "Amazon GuardDuty performs intelligent, continuous threat detection by analyzing account logs, with no need for agents."
    }
  },
  {
    "id": 44,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Segurança - Visão centralizada de descobertas",
      "en": "Security - Centralized View of Findings"
    },
    "description": {
      "pt-BR": "Uma empresa já usa GuardDuty, Inspector e Macie em várias contas. A equipe de segurança quer um painel único que agregue e priorize as descobertas desses serviços e execute verificações automáticas contra padrões como o CIS AWS Foundations Benchmark. Qual serviço atende?",
      "en": "A company already uses GuardDuty, Inspector, and Macie across several accounts. The security team wants a single dashboard that aggregates and prioritizes findings from these services and runs automated checks against standards such as the CIS AWS Foundations Benchmark. Which service meets this?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon GuardDuty",
          "en": "Amazon GuardDuty"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O GuardDuty gera suas próprias descobertas de ameaças, mas não agrega descobertas do Inspector e do Macie nem executa verificações contra padrões como o CIS.",
          "en": "GuardDuty generates its own threat findings, but it does not aggregate findings from Inspector and Macie or run checks against standards such as CIS."
        }
      },
      {
        "title": {
          "pt-BR": "AWS CloudTrail",
          "en": "AWS CloudTrail"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O CloudTrail registra as chamadas de API realizadas nas contas para auditoria. Não consolida descobertas de outros serviços de segurança nem avalia a postura contra padrões.",
          "en": "CloudTrail records the API calls made in the accounts for auditing. It does not consolidate findings from other security services or assess posture against standards."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Security Hub",
          "en": "AWS Security Hub"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Security Hub centraliza e prioriza descobertas de serviços como GuardDuty, Inspector e Macie em várias contas e executa verificações automáticas contra padrões como CIS e AWS Foundational Security Best Practices.",
          "en": "Security Hub centralizes and prioritizes findings from services such as GuardDuty, Inspector, and Macie across accounts and runs automated checks against standards such as CIS and AWS Foundational Security Best Practices."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Trusted Advisor",
          "en": "AWS Trusted Advisor"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Trusted Advisor oferece recomendações em categorias como custo, segurança e limites de serviço, mas não agrega descobertas do GuardDuty, Inspector e Macie em um painel de segurança.",
          "en": "Trusted Advisor offers recommendations in categories such as cost, security, and service limits, but it does not aggregate GuardDuty, Inspector, and Macie findings into a security dashboard."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Security Hub oferece uma visão centralizada da postura de segurança, agregando descobertas e verificando padrões de conformidade.",
      "en": "AWS Security Hub provides a centralized view of security posture by aggregating findings and checking compliance standards."
    }
  },
  {
    "id": 45,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Proteção de dados - Dados sensíveis no S3",
      "en": "Data Protection - Sensitive Data in S3"
    },
    "description": {
      "pt-BR": "Uma empresa armazena milhões de arquivos em centenas de buckets S3 e precisa descobrir quais deles contêm dados pessoais, como números de cartão de crédito e documentos de identificação, para atender à LGPD. Qual serviço automatiza essa descoberta?",
      "en": "A company stores millions of files in hundreds of S3 buckets and needs to find out which of them contain personal data, such as credit card numbers and identification documents, to comply with data protection laws. Which service automates this discovery?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon Macie",
          "en": "Amazon Macie"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Macie usa machine learning e correspondência de padrões para descobrir e classificar dados sensíveis, como PII e dados financeiros, em buckets S3, além de avaliar a segurança e o acesso desses buckets.",
          "en": "Macie uses machine learning and pattern matching to discover and classify sensitive data, such as PII and financial data, in S3 buckets, and also evaluates the security and access of those buckets."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon GuardDuty",
          "en": "Amazon GuardDuty"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A proteção de S3 do GuardDuty detecta padrões de acesso suspeitos aos buckets, mas não analisa o conteúdo dos objetos para identificar dados pessoais.",
          "en": "GuardDuty S3 protection detects suspicious access patterns to buckets, but it does not analyze object contents to identify personal data."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Inspector",
          "en": "Amazon Inspector"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Inspector procura vulnerabilidades em EC2, imagens de container e funções Lambda. Não verifica o conteúdo de objetos no S3 em busca de dados sensíveis.",
          "en": "Inspector looks for vulnerabilities in EC2, container images, and Lambda functions. It does not scan S3 object contents for sensitive data."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Detective",
          "en": "Amazon Detective"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Detective ajuda a investigar a causa raiz de descobertas de segurança, correlacionando logs e comportamentos. Não classifica o conteúdo dos arquivos armazenados no S3.",
          "en": "Detective helps investigate the root cause of security findings by correlating logs and behavior. It does not classify the contents of files stored in S3."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Amazon Macie descobre e protege dados sensíveis armazenados no S3 usando machine learning.",
      "en": "Amazon Macie discovers and protects sensitive data stored in S3 using machine learning."
    }
  },
  {
    "id": 46,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Criptografia - Dados entre usuário e aplicação",
      "en": "Encryption - Data Between User and Application"
    },
    "description": {
      "pt-BR": "Uma aplicação web recebe dados de login e pagamento enviados pelos navegadores dos clientes. O requisito é impedir que esses dados sejam interceptados enquanto trafegam pela internet até a aplicação. Qual medida atende diretamente a esse requisito?",
      "en": "A web application receives login and payment data sent from customers' browsers. The requirement is to prevent this data from being intercepted while it travels over the internet to the application. Which measure directly meets this requirement?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Criptografar os volumes EBS das instâncias com chaves do AWS KMS",
          "en": "Encrypt the instances' EBS volumes with AWS KMS keys"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Criptografar volumes EBS protege os dados em repouso, gravados em disco. Não protege os dados enquanto trafegam entre o navegador e a aplicação.",
          "en": "Encrypting EBS volumes protects data at rest, written to disk. It does not protect data while it travels between the browser and the application."
        }
      },
      {
        "title": {
          "pt-BR": "Ativar a criptografia do lado do servidor (SSE-S3) nos buckets S3",
          "en": "Enable server-side encryption (SSE-S3) on the S3 buckets"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "SSE-S3 criptografa os objetos quando são armazenados no bucket, ou seja, em repouso. Não impede a interceptação dos dados no caminho do navegador até a aplicação.",
          "en": "SSE-S3 encrypts objects when they are stored in the bucket, that is, at rest. It does not prevent interception of data on the way from the browser to the application."
        }
      },
      {
        "title": {
          "pt-BR": "Criptografar a instância do banco Amazon RDS com chaves do KMS",
          "en": "Encrypt the Amazon RDS database instance with KMS keys"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A criptografia do RDS com KMS protege o storage, os backups e os snapshots em repouso. O risco descrito ocorre antes, durante o tráfego pela internet.",
          "en": "RDS encryption with KMS protects storage, backups, and snapshots at rest. The risk described happens earlier, while traffic travels over the internet."
        }
      },
      {
        "title": {
          "pt-BR": "Usar HTTPS com certificados TLS emitidos pelo AWS Certificate Manager",
          "en": "Use HTTPS with TLS certificates issued by AWS Certificate Manager"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "HTTPS/TLS criptografa os dados em trânsito entre o navegador e a aplicação, impedindo que sejam lidos se interceptados. O ACM emite e renova certificados para uso em serviços como ALB e CloudFront.",
          "en": "HTTPS/TLS encrypts data in transit between the browser and the application, preventing it from being read if intercepted. ACM issues and renews certificates for use with services such as ALB and CloudFront."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Criptografia em trânsito (TLS) protege os dados enquanto trafegam; criptografia em repouso (como com o KMS) protege os dados armazenados.",
      "en": "Encryption in transit (TLS) protects data while it travels; encryption at rest (such as with KMS) protects stored data."
    }
  },
  {
    "id": 47,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Conformidade - Dados de saúde",
      "en": "Compliance - Health Data"
    },
    "description": {
      "pt-BR": "Uma empresa de saúde dos EUA quer processar informações de saúde protegidas (PHI) na AWS, em conformidade com a HIPAA. O que a empresa precisa fazer?",
      "en": "A US healthcare company wants to process protected health information (PHI) on AWS in compliance with HIPAA. What does the company need to do?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Nada, pois a conformidade da infraestrutura da AWS é herdada integralmente pela aplicação",
          "en": "Nothing, because the AWS infrastructure compliance is fully inherited by the application"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O cliente herda os controles da infraestrutura física, mas continua responsável por configurar seus serviços, acessos e dados de forma conforme. A conformidade da aplicação não é automática.",
          "en": "The customer inherits the physical infrastructure controls but remains responsible for configuring its services, access, and data in a compliant way. Application compliance is not automatic."
        }
      },
      {
        "title": {
          "pt-BR": "Aceitar o BAA com a AWS, usar serviços qualificados pela HIPAA e configurar seus controles",
          "en": "Accept the BAA with AWS, use HIPAA-eligible services, and configure its own controls"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Para HIPAA, o cliente aceita o Business Associate Addendum (BAA), por exemplo pelo AWS Artifact, processa PHI apenas em serviços qualificados e configura criptografia, acessos e logs sob sua responsabilidade.",
          "en": "For HIPAA, the customer accepts the Business Associate Addendum (BAA), for example through AWS Artifact, processes PHI only in eligible services, and configures encryption, access, and logging under its responsibility."
        }
      },
      {
        "title": {
          "pt-BR": "Solicitar que a AWS audite e certifique as aplicações da empresa para a HIPAA",
          "en": "Ask AWS to audit and certify the company's applications for HIPAA"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A AWS não audita nem certifica as aplicações dos clientes. Garantir e demonstrar a conformidade das próprias aplicações é responsabilidade do cliente, que pode contratar seus auditores.",
          "en": "AWS does not audit or certify customers' applications. Ensuring and demonstrating the compliance of its own applications is the customer's responsibility, which may hire its own auditors."
        }
      },
      {
        "title": {
          "pt-BR": "Usar qualquer serviço AWS, desde que os dados fiquem em uma região dos EUA",
          "en": "Use any AWS service, as long as the data stays in a US region"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A localização dos dados não torna um serviço adequado à HIPAA. Apenas os serviços qualificados pela HIPAA, cobertos pelo BAA, podem ser usados para processar PHI.",
          "en": "Data location does not make a service suitable for HIPAA. Only HIPAA-eligible services, covered by the BAA, may be used to process PHI."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Na conformidade, a AWS cuida dos controles da infraestrutura, e o cliente precisa usar serviços elegíveis e configurar os controles de sua responsabilidade para cada programa.",
      "en": "In compliance, AWS handles the infrastructure controls, and the customer must use eligible services and configure the controls under its responsibility for each program."
    }
  },
  {
    "id": 48,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "IAM - Auditoria de credenciais",
      "en": "IAM - Credential Auditing"
    },
    "description": {
      "pt-BR": "A equipe de segurança precisa de um relatório que liste todos os IAM users da conta com o status de suas senhas, access keys (incluindo último uso e última rotação) e dispositivos MFA, para auditar credenciais antigas ou sem MFA. Qual recurso fornece isso?",
      "en": "The security team needs a report listing all IAM users in the account with the status of their passwords, access keys (including last use and last rotation), and MFA devices, to audit old credentials or users without MFA. Which feature provides this?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "IAM Access Analyzer",
          "en": "IAM Access Analyzer"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O IAM Access Analyzer identifica recursos compartilhados com entidades externas e ajuda a validar políticas. Não gera um inventário do status de senhas, access keys e MFA de cada usuário.",
          "en": "IAM Access Analyzer identifies resources shared with external entities and helps validate policies. It does not generate an inventory of each user's password, access key, and MFA status."
        }
      },
      {
        "title": {
          "pt-BR": "AWS CloudTrail",
          "en": "AWS CloudTrail"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O CloudTrail registra as chamadas de API feitas pelas identidades. Seria preciso processar muitos eventos para inferir o uso das credenciais, e ele não informa diretamente idade das chaves nem status de MFA.",
          "en": "CloudTrail records API calls made by identities. Many events would need to be processed to infer credential usage, and it does not directly report key age or MFA status."
        }
      },
      {
        "title": {
          "pt-BR": "IAM credential report",
          "en": "IAM credential report"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O credential report do IAM é um arquivo CSV que lista todos os usuários da conta e o status de suas credenciais: senha, access keys com último uso e rotação, e MFA. É usado em auditorias e junto com a política de senhas da conta.",
          "en": "The IAM credential report is a CSV file listing all users in the account and the status of their credentials: password, access keys with last use and rotation, and MFA. It is used for audits along with the account password policy."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Inspector",
          "en": "Amazon Inspector"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Inspector avalia vulnerabilidades de software em EC2, containers e Lambda. Não audita credenciais de usuários IAM.",
          "en": "Inspector assesses software vulnerabilities in EC2, containers, and Lambda. It does not audit IAM user credentials."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O IAM credential report lista todos os usuários e o status de suas credenciais, facilitando auditorias de segurança.",
      "en": "The IAM credential report lists all users and the status of their credentials, making security audits easier."
    }
  },
  {
    "id": 49,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Governança multi-conta - Landing zone",
      "en": "Multi-Account Governance - Landing Zone"
    },
    "description": {
      "pt-BR": "Uma empresa quer montar rapidamente um ambiente multi-conta seguindo boas práticas, com contas dedicadas para logs e auditoria, guardrails preventivos e detectivos já configurados e um processo padronizado para criar novas contas. Qual serviço atende?",
      "en": "A company wants to quickly set up a multi-account environment following best practices, with dedicated log and audit accounts, preventive and detective guardrails already configured, and a standardized process for creating new accounts. Which service meets this?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Control Tower",
          "en": "AWS Control Tower"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Control Tower automatiza a criação de uma landing zone com AWS Organizations, contas de log e auditoria, controles (guardrails) preventivos e detectivos e o Account Factory para padronizar a criação de contas.",
          "en": "Control Tower automates the creation of a landing zone with AWS Organizations, log and audit accounts, preventive and detective controls (guardrails), and Account Factory to standardize account creation."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Organizations configurado manualmente",
          "en": "AWS Organizations configured manually"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Organizations fornece a estrutura de contas, OUs e SCPs, mas montar contas de log, auditoria e guardrails com ele exige configuração manual. Não entrega uma landing zone pronta rapidamente.",
          "en": "Organizations provides the account structure, OUs, and SCPs, but setting up log accounts, audit accounts, and guardrails with it requires manual configuration. It does not quickly deliver a ready-made landing zone."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Service Catalog",
          "en": "AWS Service Catalog"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Service Catalog permite publicar portfólios de produtos aprovados para os usuários provisionarem. Sozinho, não cria contas de log e auditoria nem aplica guardrails multi-conta.",
          "en": "Service Catalog allows publishing portfolios of approved products for users to provision. By itself, it does not create log and audit accounts or apply multi-account guardrails."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Config com conformance packs",
          "en": "AWS Config with conformance packs"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Conformance packs agrupam regras do Config para avaliar conformidade, atuando de forma detectiva. Não criam a estrutura de contas nem os controles preventivos da landing zone.",
          "en": "Conformance packs group Config rules to evaluate compliance, acting in a detective way. They do not create the account structure or the landing zone's preventive controls."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Control Tower configura e governa uma landing zone multi-conta segura com base em boas práticas.",
      "en": "AWS Control Tower sets up and governs a secure multi-account landing zone based on best practices."
    }
  },
  {
    "id": 50,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Redes - Ambiente de rede isolado",
      "en": "Networking - Isolated Network Environment"
    },
    "description": {
      "pt-BR": "Uma empresa quer lançar seus recursos AWS em uma rede isolada logicamente, na qual ela define o próprio intervalo de IPs, cria sub-redes públicas e privadas e configura tabelas de rotas e gateways. Qual serviço fornece isso?",
      "en": "A company wants to launch its AWS resources in a logically isolated network in which it defines its own IP range, creates public and private subnets, and configures route tables and gateways. Which service provides this?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Direct Connect",
          "en": "AWS Direct Connect"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Direct Connect cria uma conexão de rede dedicada entre o ambiente on-premises e a AWS. Ele não define a rede virtual, as sub-redes e as rotas onde os recursos são lançados.",
          "en": "Direct Connect creates a dedicated network connection between the on-premises environment and AWS. It does not define the virtual network, subnets, and routes where resources are launched."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Site-to-Site VPN",
          "en": "AWS Site-to-Site VPN"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A Site-to-Site VPN cria túneis criptografados pela internet entre uma rede on-premises e a AWS. Ela conecta redes, mas não é a rede isolada onde os recursos são lançados.",
          "en": "Site-to-Site VPN creates encrypted tunnels over the internet between an on-premises network and AWS. It connects networks, but it is not the isolated network where resources are launched."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon VPC",
          "en": "Amazon VPC"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "A Amazon VPC é uma rede virtual isolada logicamente na AWS, onde o cliente define o bloco CIDR, cria sub-redes em diferentes AZs e controla roteamento, gateways e regras de segurança.",
          "en": "Amazon VPC is a logically isolated virtual network in AWS, where the customer defines the CIDR block, creates subnets in different AZs, and controls routing, gateways, and security rules."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Transit Gateway",
          "en": "AWS Transit Gateway"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Transit Gateway é um hub que interconecta várias VPCs e redes on-premises. Ele pressupõe que as redes já existam; não é o serviço que cria a rede isolada com sub-redes.",
          "en": "Transit Gateway is a hub that interconnects multiple VPCs and on-premises networks. It assumes the networks already exist; it is not the service that creates the isolated network with subnets."
        }
      }
    ],
    "explanation": {
      "pt-BR": "A Amazon VPC permite provisionar uma seção isolada logicamente da AWS com controle total do ambiente de rede.",
      "en": "Amazon VPC allows provisioning a logically isolated section of AWS with full control over the network environment."
    }
  },
  {
    "id": 51,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Computação - Quantidade de instâncias conforme a carga",
      "en": "Compute - Instance Count Based on Load"
    },
    "description": {
      "pt-BR": "A frota de instâncias EC2 de uma aplicação fica com CPU acima de 80% no horário comercial e quase ociosa à noite. A empresa quer que instâncias sejam lançadas automaticamente quando a CPU subir, encerradas quando ela cair e substituídas se ficarem não saudáveis. Qual serviço atende?",
      "en": "An application's EC2 fleet runs above 80% CPU during business hours and is nearly idle at night. The company wants instances to be launched automatically when CPU rises, terminated when it drops, and replaced if they become unhealthy. Which service meets this?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon EC2 Auto Scaling",
          "en": "Amazon EC2 Auto Scaling"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O EC2 Auto Scaling ajusta a quantidade de instâncias de um grupo com base em políticas, como uma métrica de CPU, e substitui instâncias que falham nas verificações de saúde, mantendo a capacidade desejada.",
          "en": "EC2 Auto Scaling adjusts the number of instances in a group based on policies, such as a CPU metric, and replaces instances that fail health checks, maintaining the desired capacity."
        }
      },
      {
        "title": {
          "pt-BR": "Elastic Load Balancing",
          "en": "Elastic Load Balancing"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Elastic Load Balancing distribui o tráfego entre as instâncias registradas e deixa de enviar requisições às não saudáveis, mas não lança nem encerra instâncias para ajustar a capacidade.",
          "en": "Elastic Load Balancing distributes traffic across registered instances and stops sending requests to unhealthy ones, but it does not launch or terminate instances to adjust capacity."
        }
      },
      {
        "title": {
          "pt-BR": "Alarmes do Amazon CloudWatch",
          "en": "Amazon CloudWatch alarms"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Alarmes do CloudWatch monitoram a métrica de CPU e disparam ações, mas sozinhos não gerenciam uma frota de instâncias. Eles costumam ser o gatilho de políticas de escalonamento do Auto Scaling.",
          "en": "CloudWatch alarms monitor the CPU metric and trigger actions, but on their own they do not manage an instance fleet. They are commonly the trigger for Auto Scaling scaling policies."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Compute Optimizer",
          "en": "AWS Compute Optimizer"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Compute Optimizer analisa o histórico de uso e recomenda tipos e tamanhos de instância mais adequados. Ele não adiciona nem remove instâncias automaticamente conforme a carga.",
          "en": "Compute Optimizer analyzes usage history and recommends more suitable instance types and sizes. It does not automatically add or remove instances based on load."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O EC2 Auto Scaling fornece elasticidade ajustando automaticamente o número de instâncias à demanda e substituindo instâncias não saudáveis.",
      "en": "EC2 Auto Scaling provides elasticity by automatically adjusting the number of instances to demand and replacing unhealthy instances."
    }
  },
  {
    "id": 52,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Containers - Execução sem gerenciar servidores",
      "en": "Containers - Running Without Managing Servers"
    },
    "description": {
      "pt-BR": "Uma equipe empacotou sua aplicação em imagens Docker e quer executá-la na AWS sem provisionar, aplicar patches ou escalar instâncias EC2 para hospedar os containers. Qual opção atende?",
      "en": "A team has packaged its application into Docker images and wants to run it on AWS without provisioning, patching, or scaling EC2 instances to host the containers. Which option meets this?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon ECS com o tipo de inicialização EC2",
          "en": "Amazon ECS with the EC2 launch type"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Com o tipo de inicialização EC2, os containers rodam em instâncias do cluster que o cliente precisa provisionar, atualizar e escalar. Isso contraria o requisito de não gerenciar servidores.",
          "en": "With the EC2 launch type, containers run on cluster instances that the customer must provision, update, and scale. This contradicts the requirement of not managing servers."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon ECS com AWS Fargate",
          "en": "Amazon ECS with AWS Fargate"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Fargate é um mecanismo de computação serverless para containers: o cliente define CPU e memória das tarefas e a AWS gerencia a infraestrutura subjacente, sem instâncias para administrar.",
          "en": "Fargate is a serverless compute engine for containers: the customer defines task CPU and memory, and AWS manages the underlying infrastructure, with no instances to administer."
        }
      },
      {
        "title": {
          "pt-BR": "Instâncias Amazon EC2 com o Docker instalado",
          "en": "Amazon EC2 instances with Docker installed"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Rodar Docker diretamente em instâncias EC2 exige gerenciar sistema operacional, patches, escala e a própria orquestração dos containers, exatamente o que a equipe quer evitar.",
          "en": "Running Docker directly on EC2 instances requires managing the operating system, patches, scaling, and container orchestration itself, exactly what the team wants to avoid."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Elastic Container Registry (ECR)",
          "en": "Amazon Elastic Container Registry (ECR)"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O ECR é um registro gerenciado para armazenar e versionar imagens de container. Ele guarda as imagens, mas não executa os containers.",
          "en": "ECR is a managed registry to store and version container images. It stores the images but does not run the containers."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Amazon ECS com Fargate executa containers sem que o cliente precise gerenciar servidores ou clusters de instâncias.",
      "en": "Amazon ECS with Fargate runs containers without the customer needing to manage servers or instance clusters."
    }
  },
  {
    "id": 53,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Implantação - Foco apenas no código",
      "en": "Deployment - Focus Only on Code"
    },
    "description": {
      "pt-BR": "Uma equipe de desenvolvedores quer apenas enviar o código de uma aplicação web Java e deixar que a AWS provisione automaticamente as instâncias, o balanceador de carga, o Auto Scaling e o monitoramento, mantendo acesso aos recursos criados. Qual serviço atende?",
      "en": "A team of developers wants to just upload the code of a Java web application and let AWS automatically provision the instances, load balancer, Auto Scaling, and monitoring, while keeping access to the created resources. Which service meets this?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS CloudFormation",
          "en": "AWS CloudFormation"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O CloudFormation provisiona recursos a partir de templates, mas a equipe precisaria descrever cada instância, balanceador e grupo de Auto Scaling. Ele não parte apenas do código da aplicação.",
          "en": "CloudFormation provisions resources from templates, but the team would need to describe each instance, load balancer, and Auto Scaling group. It does not start from just the application code."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Lightsail",
          "en": "Amazon Lightsail"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Lightsail oferece servidores virtuais e recursos simplificados a preço fixo. Ele não provisiona automaticamente balanceador e Auto Scaling a partir do envio do código da aplicação.",
          "en": "Lightsail offers virtual servers and simplified resources at a fixed price. It does not automatically provision a load balancer and Auto Scaling from an uploaded application code."
        }
      },
      {
        "title": {
          "pt-BR": "Instâncias EC2 criadas a partir de uma AMI personalizada",
          "en": "EC2 instances created from a custom AMI"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Uma AMI padroniza a instância, mas a equipe continuaria configurando manualmente balanceador, Auto Scaling, monitoramento e o processo de implantação.",
          "en": "An AMI standardizes the instance, but the team would still manually configure the load balancer, Auto Scaling, monitoring, and the deployment process."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Elastic Beanstalk",
          "en": "AWS Elastic Beanstalk"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Elastic Beanstalk recebe o código e provisiona automaticamente capacidade, balanceamento de carga, Auto Scaling e monitoramento de saúde, enquanto o cliente mantém controle sobre os recursos subjacentes.",
          "en": "Elastic Beanstalk takes the code and automatically provisions capacity, load balancing, Auto Scaling, and health monitoring, while the customer keeps control over the underlying resources."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Elastic Beanstalk é uma plataforma que implanta e escala aplicações a partir do código, cuidando da infraestrutura automaticamente.",
      "en": "AWS Elastic Beanstalk is a platform that deploys and scales applications from code, handling the infrastructure automatically."
    }
  },
  {
    "id": 54,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Automação - Ambientes idênticos e versionados",
      "en": "Automation - Identical, Versioned Environments"
    },
    "description": {
      "pt-BR": "Uma empresa quer descrever toda a sua infraestrutura (VPC, instâncias, bancos e permissões) em arquivos YAML versionados no Git e usá-los para criar ambientes idênticos de teste e produção em várias regiões. Qual serviço atende?",
      "en": "A company wants to describe its entire infrastructure (VPC, instances, databases, and permissions) in YAML files versioned in Git and use them to create identical test and production environments in multiple regions. Which service meets this?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS CloudFormation",
          "en": "AWS CloudFormation"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O CloudFormation é o serviço de infraestrutura como código da AWS: templates em YAML ou JSON descrevem os recursos, que são criados como stacks de forma repetível em qualquer conta e região.",
          "en": "CloudFormation is AWS's infrastructure as code service: YAML or JSON templates describe the resources, which are created as stacks repeatably in any account and region."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Elastic Beanstalk",
          "en": "AWS Elastic Beanstalk"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Elastic Beanstalk provisiona automaticamente o ambiente de uma aplicação a partir do código. Ele não se destina a descrever toda a infraestrutura, como VPCs e permissões, em templates.",
          "en": "Elastic Beanstalk automatically provisions an application's environment from code. It is not intended to describe the entire infrastructure, such as VPCs and permissions, in templates."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Config",
          "en": "AWS Config"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Config registra a configuração dos recursos existentes e avalia sua conformidade. Ele não cria recursos a partir de arquivos de definição.",
          "en": "AWS Config records the configuration of existing resources and evaluates their compliance. It does not create resources from definition files."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Systems Manager",
          "en": "AWS Systems Manager"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Systems Manager gerencia operações em recursos existentes, como aplicação de patches, execução de comandos e parâmetros. Não é o serviço usado para provisionar a infraestrutura completa a partir de templates.",
          "en": "Systems Manager manages operations on existing resources, such as patching, running commands, and parameters. It is not the service used to provision the full infrastructure from templates."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS CloudFormation permite modelar e provisionar recursos como código, de forma repetível e versionável.",
      "en": "AWS CloudFormation allows modeling and provisioning resources as code, in a repeatable and versionable way."
    }
  },
  {
    "id": 55,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Migração de dados - Grande volume com pouca banda",
      "en": "Data Migration - Large Volume with Limited Bandwidth"
    },
    "description": {
      "pt-BR": "Uma empresa precisa transferir 80 TB de arquivos do seu data center para o Amazon S3 em poucas semanas. O link de internet disponível é limitado e a transferência por ele levaria vários meses. Qual solução é mais adequada?",
      "en": "A company needs to transfer 80 TB of files from its data center to Amazon S3 within a few weeks. The available internet link is limited, and transferring over it would take several months. Which solution is most appropriate?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS DataSync pela conexão de internet existente",
          "en": "AWS DataSync over the existing internet connection"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O DataSync automatiza e acelera transferências online, mas continua limitado pela banda do link. Com a conexão atual, a transferência levaria meses.",
          "en": "DataSync automates and accelerates online transfers, but it is still limited by the link's bandwidth. With the current connection, the transfer would take months."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon S3 Transfer Acceleration",
          "en": "Amazon S3 Transfer Acceleration"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Transfer Acceleration usa as Edge Locations para otimizar o caminho até o S3 em longas distâncias, mas não aumenta a banda do link da empresa, que é o gargalo.",
          "en": "Transfer Acceleration uses Edge Locations to optimize the path to S3 over long distances, but it does not increase the company's link bandwidth, which is the bottleneck."
        }
      },
      {
        "title": {
          "pt-BR": "Dispositivos AWS Snowball Edge",
          "en": "AWS Snowball Edge devices"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Snowball Edge é um dispositivo físico enviado ao cliente para copiar os dados localmente e devolvê-los à AWS, que os carrega no S3. Evita depender do link de internet para grandes volumes.",
          "en": "Snowball Edge is a physical device shipped to the customer to copy data locally and return it to AWS, which loads it into S3. It avoids depending on the internet link for large volumes."
        }
      },
      {
        "title": {
          "pt-BR": "Uma nova conexão AWS Direct Connect",
          "en": "A new AWS Direct Connect connection"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Direct Connect oferece banda dedicada, mas o provisionamento de um novo circuito pode levar semanas ou meses e gera custo recorrente, o que não se justifica para uma migração única com prazo curto.",
          "en": "Direct Connect offers dedicated bandwidth, but provisioning a new circuit can take weeks or months and incurs recurring cost, which is not justified for a one-time migration with a short deadline."
        }
      }
    ],
    "explanation": {
      "pt-BR": "A família AWS Snow transfere grandes volumes de dados offline quando a transferência pela rede seria lenta demais.",
      "en": "The AWS Snow family transfers large volumes of data offline when a network transfer would be too slow."
    }
  },
  {
    "id": 56,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Inteligência artificial - Análise de imagens",
      "en": "Artificial Intelligence - Image Analysis"
    },
    "description": {
      "pt-BR": "Um aplicativo de rede social quer identificar objetos e rostos nas fotos enviadas pelos usuários e moderar automaticamente conteúdo impróprio. A equipe não tem especialistas em machine learning. Qual serviço atende?",
      "en": "A social networking app wants to identify objects and faces in photos uploaded by users and automatically moderate inappropriate content. The team has no machine learning experts. Which service meets this?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon SageMaker AI",
          "en": "Amazon SageMaker AI"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O SageMaker AI é usado para construir, treinar e implantar modelos de machine learning próprios. Resolver esse caso com ele exigiria a expertise em ML que a equipe não tem.",
          "en": "SageMaker AI is used to build, train, and deploy your own machine learning models. Solving this case with it would require the ML expertise the team does not have."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Rekognition",
          "en": "Amazon Rekognition"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Rekognition é um serviço de IA pré-treinado que analisa imagens e vídeos por API, detectando objetos, rostos e conteúdo impróprio, sem necessidade de conhecimento em machine learning.",
          "en": "Rekognition is a pre-trained AI service that analyzes images and videos via API, detecting objects, faces, and inappropriate content, with no machine learning knowledge required."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Textract",
          "en": "Amazon Textract"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Textract extrai texto, formulários e tabelas de documentos digitalizados. Ele não identifica objetos e rostos nem modera conteúdo visual.",
          "en": "Textract extracts text, forms, and tables from scanned documents. It does not identify objects and faces or moderate visual content."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Comprehend",
          "en": "Amazon Comprehend"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Comprehend usa processamento de linguagem natural para analisar texto, como sentimento e entidades. Ele não analisa o conteúdo de imagens.",
          "en": "Comprehend uses natural language processing to analyze text, such as sentiment and entities. It does not analyze image content."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Amazon Rekognition adiciona análise de imagens e vídeos às aplicações por API, sem exigir expertise em machine learning.",
      "en": "Amazon Rekognition adds image and video analysis to applications via API, without requiring machine learning expertise."
    }
  },
  {
    "id": 57,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Análise de dados - Consultas históricas complexas",
      "en": "Analytics - Complex Historical Queries"
    },
    "description": {
      "pt-BR": "Analistas executam consultas complexas que agregam cinco anos de dados de vendas de várias fontes, e isso está deixando lento o banco transacional que atende os pedidos online. A empresa quer um serviço próprio para esse tipo de análise (OLAP). Qual é o mais adequado?",
      "en": "Analysts run complex queries that aggregate five years of sales data from multiple sources, and this is slowing down the transactional database that serves online orders. The company wants a dedicated service for this type of analysis (OLAP). Which is most appropriate?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon DynamoDB",
          "en": "Amazon DynamoDB"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O DynamoDB é um banco NoSQL chave-valor otimizado para acessos transacionais de baixa latência. Não é adequado para consultas analíticas com agregações e junções sobre anos de dados.",
          "en": "DynamoDB is a key-value NoSQL database optimized for low-latency transactional access. It is not suited for analytical queries with aggregations and joins over years of data."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon ElastiCache",
          "en": "Amazon ElastiCache"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O ElastiCache é um cache em memória que acelera leituras frequentes de dados. Não armazena nem processa grandes históricos para consultas analíticas complexas.",
          "en": "ElastiCache is an in-memory cache that speeds up frequent data reads. It does not store or process large histories for complex analytical queries."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon RDS com implantação Multi-AZ",
          "en": "Amazon RDS with a Multi-AZ deployment"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Multi-AZ mantém uma instância standby para alta disponibilidade, e o banco continua sendo transacional (OLTP). Não oferece o processamento colunar e paralelo necessário para análises em grande escala.",
          "en": "Multi-AZ keeps a standby instance for high availability, and the database remains transactional (OLTP). It does not offer the columnar, parallel processing needed for large-scale analytics."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Redshift",
          "en": "Amazon Redshift"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Redshift é um data warehouse gerenciado com armazenamento colunar e processamento paralelo, projetado para consultas analíticas (OLAP) sobre grandes volumes de dados de várias fontes, separando essa carga do banco OLTP.",
          "en": "Redshift is a managed data warehouse with columnar storage and parallel processing, designed for analytical (OLAP) queries over large volumes of data from multiple sources, separating this load from the OLTP database."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Amazon Redshift é o data warehouse da AWS para análises OLAP, enquanto bancos como o RDS atendem cargas transacionais (OLTP).",
      "en": "Amazon Redshift is AWS's data warehouse for OLAP analytics, while databases such as RDS serve transactional (OLTP) workloads."
    }
  },
  {
    "id": 58,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Infraestrutura global - Componentes",
      "en": "Global Infrastructure - Components"
    },
    "description": {
      "pt-BR": "Uma empresa precisa: manter os dados em um país específico por exigência legal, proteger a aplicação contra a falha de um data center e entregar conteúdo em cache perto dos usuários. Qual associação entre requisito e componente da infraestrutura global está correta?",
      "en": "A company needs to: keep data in a specific country due to legal requirements, protect the application against the failure of a data center, and deliver cached content close to users. Which mapping between requirement and global infrastructure component is correct?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Região para residência, múltiplas AZs para falhas e Edge Locations para cache",
          "en": "Region for residency, multiple AZs for failures, and Edge Locations for caching"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "A Região define a área geográfica onde os dados ficam; as AZs são data centers isolados dentro da Região que protegem contra falhas locais; e as Edge Locations fazem cache de conteúdo perto dos usuários.",
          "en": "The Region defines the geographic area where data resides; AZs are isolated data centers within the Region that protect against local failures; and Edge Locations cache content close to users."
        }
      },
      {
        "title": {
          "pt-BR": "Edge Location para residência, múltiplas Regiões para falhas e AZs para cache",
          "en": "Edge Location for residency, multiple Regions for failures, and AZs for caching"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Edge Locations são pontos de presença para CDN e DNS, não locais para hospedar a carga principal e seus dados. AZs também não são usadas para cache perto dos usuários finais.",
          "en": "Edge Locations are points of presence for CDN and DNS, not places to host the main workload and its data. AZs are also not used for caching close to end users."
        }
      },
      {
        "title": {
          "pt-BR": "AZ para residência, múltiplas Edge Locations para falhas e Regiões para cache",
          "en": "AZ for residency, multiple Edge Locations for failures, and Regions for caching"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A residência de dados é definida pela escolha da Região, e as Edge Locations não hospedam a aplicação para protegê-la contra falhas de data center. Regiões também não são pontos de cache.",
          "en": "Data residency is defined by the choice of Region, and Edge Locations do not host the application to protect it against data center failures. Regions are also not caching points."
        }
      },
      {
        "title": {
          "pt-BR": "Região para residência, múltiplas Edge Locations para falhas e AZs para cache",
          "en": "Region for residency, multiple Edge Locations for failures, and AZs for caching"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A Região está correta para residência, mas a proteção contra falha de data center vem de distribuir a aplicação entre AZs, e o cache perto dos usuários é feito nas Edge Locations, não nas AZs.",
          "en": "The Region is correct for residency, but protection against data center failure comes from spreading the application across AZs, and caching close to users is done at Edge Locations, not AZs."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Regiões são áreas geográficas, AZs são data centers isolados dentro de uma Região e Edge Locations aproximam conteúdo dos usuários.",
      "en": "Regions are geographic areas, AZs are isolated data centers within a Region, and Edge Locations bring content closer to users."
    }
  },
  {
    "id": 59,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Armazenamento - Arquivos compartilhados entre instâncias",
      "en": "Storage - Files Shared Across Instances"
    },
    "description": {
      "pt-BR": "Várias instâncias EC2 Linux, distribuídas em diferentes Zonas de Disponibilidade, precisam ler e gravar os mesmos arquivos ao mesmo tempo por meio de um sistema de arquivos compartilhado que cresce automaticamente. Qual serviço de armazenamento atende?",
      "en": "Several Linux EC2 instances, spread across different Availability Zones, need to read and write the same files at the same time through a shared file system that grows automatically. Which storage service meets this?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon EBS com volumes gp3",
          "en": "Amazon EBS with gp3 volumes"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Um volume EBS gp3 é armazenamento em bloco anexado a uma única instância na mesma AZ. Não oferece um sistema de arquivos compartilhado entre instâncias de AZs diferentes.",
          "en": "An EBS gp3 volume is block storage attached to a single instance in the same AZ. It does not offer a file system shared across instances in different AZs."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon EBS io2 com Multi-Attach",
          "en": "Amazon EBS io2 with Multi-Attach"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Multi-Attach permite anexar um volume io1/io2 a várias instâncias, mas apenas dentro da mesma AZ e exigindo um sistema de arquivos com suporte a cluster. Não atende instâncias em AZs diferentes.",
          "en": "Multi-Attach allows attaching an io1/io2 volume to multiple instances, but only within the same AZ and requiring a cluster-aware file system. It does not serve instances in different AZs."
        }
      },
      {
        "title": {
          "pt-BR": "Instance store das instâncias EC2",
          "en": "The EC2 instances' instance store"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O instance store é armazenamento em bloco temporário, fisicamente ligado ao host de cada instância. Os dados não são compartilhados e se perdem quando a instância é parada ou encerrada.",
          "en": "Instance store is temporary block storage physically attached to each instance's host. The data is not shared and is lost when the instance is stopped or terminated."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon EFS",
          "en": "Amazon EFS"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Amazon EFS é um sistema de arquivos NFS gerenciado e elástico que pode ser montado simultaneamente por milhares de instâncias em várias AZs, crescendo e diminuindo automaticamente.",
          "en": "Amazon EFS is a managed, elastic NFS file system that can be mounted simultaneously by thousands of instances across multiple AZs, growing and shrinking automatically."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Amazon EFS fornece um sistema de arquivos compartilhado em rede, enquanto o Amazon EBS fornece volumes de bloco ligados a instâncias em uma AZ.",
      "en": "Amazon EFS provides a shared network file system, while Amazon EBS provides block volumes attached to instances in one AZ."
    }
  },
  {
    "id": 60,
    "domain": "billing-pricing-support",
    "title": {
      "pt-BR": "Suporte AWS - Escolha do plano",
      "en": "AWS Support - Choosing a Plan"
    },
    "description": {
      "pt-BR": "Uma empresa roda cargas de produção na AWS e precisa de acesso 24/7 a engenheiros de suporte por telefone e chat, resposta em menos de 1 hora quando um sistema de produção cair e acesso a todas as verificações do Trusted Advisor. Ela não precisa de um Technical Account Manager. Qual é o plano de menor custo que atende?",
      "en": "A company runs production workloads on AWS and needs 24/7 phone and chat access to support engineers, a response in under 1 hour when a production system goes down, and access to all Trusted Advisor checks. It does not need a Technical Account Manager. Which is the lowest-cost plan that meets this?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Developer",
          "en": "Developer"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O plano Developer oferece acesso por e-mail em horário comercial e tempos de resposta de horas. Não inclui suporte 24/7 por telefone e chat nem resposta em 1 hora para produção fora do ar.",
          "en": "The Developer plan offers email access during business hours and response times measured in hours. It does not include 24/7 phone and chat support or a 1-hour response for a production system down."
        }
      },
      {
        "title": {
          "pt-BR": "Business",
          "en": "Business"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O plano Business inclui acesso 24/7 a engenheiros por telefone, chat e e-mail, resposta em menos de 1 hora para sistema de produção fora do ar e o conjunto completo de verificações do Trusted Advisor.",
          "en": "The Business plan includes 24/7 access to engineers by phone, chat, and email, a response in under 1 hour for a production system down, and the full set of Trusted Advisor checks."
        }
      },
      {
        "title": {
          "pt-BR": "Enterprise On-Ramp",
          "en": "Enterprise On-Ramp"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Enterprise On-Ramp atende os requisitos, mas acrescenta um pool de TAMs e respostas mais rápidas para sistemas críticos, com custo maior. Não é o plano de menor custo para o cenário.",
          "en": "Enterprise On-Ramp meets the requirements, but it adds a pool of TAMs and faster responses for critical systems, at a higher cost. It is not the lowest-cost plan for the scenario."
        }
      },
      {
        "title": {
          "pt-BR": "Enterprise",
          "en": "Enterprise"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Enterprise inclui TAM designado e resposta em 15 minutos para sistemas críticos. Atende os requisitos, mas é o plano mais caro e inclui serviços que a empresa disse não precisar.",
          "en": "Enterprise includes a designated TAM and a 15-minute response for critical systems. It meets the requirements, but it is the most expensive plan and includes services the company said it does not need."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O plano Business é o de menor custo com suporte técnico 24/7 e resposta em até 1 hora para sistemas de produção fora do ar.",
      "en": "The Business plan is the lowest-cost plan with 24/7 technical support and a response within 1 hour for production systems down."
    }
  },
  {
    "id": 61,
    "domain": "billing-pricing-support",
    "title": {
      "pt-BR": "Otimização de custos - Recursos ociosos",
      "en": "Cost Optimization - Idle Resources"
    },
    "description": {
      "pt-BR": "Uma empresa quer receber recomendações automáticas que identifiquem instâncias EC2 com baixa utilização, volumes EBS subutilizados e Elastic IPs não associados, para reduzir desperdícios na conta. Qual serviço fornece essas verificações?",
      "en": "A company wants to receive automated recommendations that identify low-utilization EC2 instances, underutilized EBS volumes, and unassociated Elastic IPs, to reduce waste in the account. Which service provides these checks?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Budgets",
          "en": "AWS Budgets"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Budgets alerta quando custos ou uso ultrapassam ou devem ultrapassar limites definidos. Ele não inspeciona os recursos para apontar quais estão ociosos.",
          "en": "AWS Budgets alerts when costs or usage exceed or are forecast to exceed defined thresholds. It does not inspect resources to point out which ones are idle."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Cost and Usage Report",
          "en": "AWS Cost and Usage Report"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Cost and Usage Report entrega dados detalhados de cobrança em arquivos no S3 para análise. Ele não gera recomendações sobre recursos ociosos.",
          "en": "The Cost and Usage Report delivers detailed billing data as files in S3 for analysis. It does not generate recommendations about idle resources."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Trusted Advisor",
          "en": "AWS Trusted Advisor"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Trusted Advisor inspeciona a conta e oferece verificações de otimização de custos, como instâncias EC2 com baixa utilização, volumes EBS subutilizados e Elastic IPs não associados, além de outras categorias.",
          "en": "Trusted Advisor inspects the account and offers cost optimization checks, such as low-utilization EC2 instances, underutilized EBS volumes, and unassociated Elastic IPs, in addition to other categories."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Pricing Calculator",
          "en": "AWS Pricing Calculator"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Pricing Calculator estima o custo de arquiteturas planejadas. Ele não analisa os recursos já existentes na conta.",
          "en": "Pricing Calculator estimates the cost of planned architectures. It does not analyze resources already in the account."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Trusted Advisor inspeciona a conta e recomenda ações em custo, segurança, desempenho, tolerância a falhas e limites de serviço.",
      "en": "AWS Trusted Advisor inspects the account and recommends actions for cost, security, performance, fault tolerance, and service limits."
    }
  },
  {
    "id": 62,
    "domain": "billing-pricing-support",
    "title": {
      "pt-BR": "Free Tier - Tipos de oferta",
      "en": "Free Tier - Offer Types"
    },
    "description": {
      "pt-BR": "Uma startup quer usar o AWS Lambda de forma contínua dentro de um limite mensal gratuito de requisições que não expira após um período desde a criação da conta. A qual tipo de oferta gratuita da AWS isso corresponde?",
      "en": "A startup wants to use AWS Lambda continuously within a monthly free request limit that does not expire after a period since account creation. Which type of AWS free offer does this correspond to?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Ofertas de 12 meses gratuitos a partir da criação da conta",
          "en": "12-month free offers starting from account creation"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Ofertas de 12 meses gratuitos têm prazo: deixam de valer após o período contado a partir da criação da conta. O cenário pede um limite que não expira.",
          "en": "12-month free offers have a deadline: they stop applying after the period counted from account creation. The scenario asks for a limit that does not expire."
        }
      },
      {
        "title": {
          "pt-BR": "Testes gratuitos de curto prazo ao ativar um serviço",
          "en": "Short-term free trials when activating a service"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Testes de curto prazo começam quando o serviço é ativado e duram um período limitado. Não oferecem um limite mensal contínuo.",
          "en": "Short-term trials start when the service is activated and last for a limited period. They do not offer a continuous monthly limit."
        }
      },
      {
        "title": {
          "pt-BR": "Créditos promocionais da AWS aplicados à fatura",
          "en": "AWS promotional credits applied to the bill"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Créditos promocionais são consumidos conforme o uso e têm data de validade. Não são um limite gratuito mensal permanente.",
          "en": "Promotional credits are consumed with usage and have an expiration date. They are not a permanent monthly free limit."
        }
      },
      {
        "title": {
          "pt-BR": "Ofertas Always Free com limite mensal de uso",
          "en": "Always Free offers with a monthly usage limit"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Ofertas Always Free não expiram e estão disponíveis para todos os clientes dentro de limites mensais, como 1 milhão de requisições por mês no AWS Lambda.",
          "en": "Always Free offers do not expire and are available to all customers within monthly limits, such as 1 million requests per month on AWS Lambda."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Free Tier combina ofertas Always Free, que não expiram, com ofertas de duração limitada, como testes de curto prazo.",
      "en": "The AWS Free Tier combines Always Free offers, which do not expire, with limited-duration offers such as short-term trials."
    }
  },
  {
    "id": 63,
    "domain": "billing-pricing-support",
    "title": {
      "pt-BR": "Gestão de custos - Análise do histórico",
      "en": "Cost Management - Historical Analysis"
    },
    "description": {
      "pt-BR": "A equipe financeira quer visualizar em gráficos os custos dos últimos 12 meses, filtrando por serviço, conta e tag, e obter uma previsão dos gastos para os próximos meses com base nesse histórico. Qual serviço atende?",
      "en": "The finance team wants to view the costs of the last 12 months in charts, filtering by service, account, and tag, and get a forecast of spending for the coming months based on that history. Which service meets this?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Cost Explorer",
          "en": "AWS Cost Explorer"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Cost Explorer oferece uma interface para visualizar e analisar custos e uso históricos, com filtros por serviço, conta e tag, e gera previsões de gastos futuros com base no histórico.",
          "en": "Cost Explorer provides an interface to view and analyze historical costs and usage, with filters by service, account, and tag, and it generates forecasts of future spending based on history."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Budgets",
          "en": "AWS Budgets"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Budgets define limites de custo ou uso e envia alertas quando eles são ou devem ser ultrapassados. Não é a ferramenta para explorar o histórico de custos em gráficos com filtros.",
          "en": "Budgets sets cost or usage limits and sends alerts when they are, or are forecast to be, exceeded. It is not the tool for exploring cost history in charts with filters."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Pricing Calculator",
          "en": "AWS Pricing Calculator"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Pricing Calculator estima custos de arquiteturas que ainda serão implantadas. Ele não usa o histórico real de gastos da conta.",
          "en": "Pricing Calculator estimates costs for architectures yet to be deployed. It does not use the account's actual spending history."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Cost and Usage Report",
          "en": "AWS Cost and Usage Report"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Cost and Usage Report entrega os dados mais detalhados de cobrança em arquivos no S3, mas não oferece visualização em gráficos nem previsão; outras ferramentas seriam necessárias para analisá-los.",
          "en": "The Cost and Usage Report delivers the most detailed billing data as files in S3, but it does not offer chart visualization or forecasting; other tools would be needed to analyze it."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Cost Explorer permite visualizar, analisar e prever custos e uso da AWS ao longo do tempo.",
      "en": "AWS Cost Explorer allows viewing, analyzing, and forecasting AWS costs and usage over time."
    }
  },
  {
    "id": 64,
    "domain": "billing-pricing-support",
    "title": {
      "pt-BR": "Faturamento - Várias contas",
      "en": "Billing - Multiple Accounts"
    },
    "description": {
      "pt-BR": "Uma empresa tem cinco contas AWS pagas separadamente. O uso de S3 de cada conta, isoladamente, não atinge as faixas de preço com desconto por volume. Qual ação permite que a empresa se beneficie dessas faixas e receba uma única fatura?",
      "en": "A company has five AWS accounts billed separately. Each account's S3 usage, on its own, does not reach the volume discount pricing tiers. Which action allows the company to benefit from these tiers and receive a single bill?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Aplicar tags de alocação de custos aos recursos de cada conta",
          "en": "Apply cost allocation tags to the resources in each account"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Tags de alocação de custos ajudam a atribuir gastos a projetos e equipes nos relatórios, mas não somam o uso das contas para alcançar faixas de desconto nem unificam a fatura.",
          "en": "Cost allocation tags help attribute spending to projects and teams in reports, but they do not combine usage across accounts to reach discount tiers or unify the bill."
        }
      },
      {
        "title": {
          "pt-BR": "Criar um orçamento no AWS Budgets para cada conta",
          "en": "Create a budget in AWS Budgets for each account"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Orçamentos monitoram gastos e enviam alertas, mas não mudam a forma de cobrança. Cada conta continuaria com sua fatura e suas próprias faixas de preço.",
          "en": "Budgets monitor spending and send alerts, but they do not change how billing works. Each account would keep its own bill and its own pricing tiers."
        }
      },
      {
        "title": {
          "pt-BR": "Usar o faturamento consolidado do AWS Organizations",
          "en": "Use AWS Organizations consolidated billing"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Com o faturamento consolidado, a conta de gerenciamento paga por todas as contas membro em uma única fatura, e o uso é agregado, alcançando faixas de desconto por volume mais cedo.",
          "en": "With consolidated billing, the management account pays for all member accounts on a single bill, and usage is aggregated, reaching volume discount tiers sooner."
        }
      },
      {
        "title": {
          "pt-BR": "Ativar o Cost Explorer em cada uma das contas",
          "en": "Enable Cost Explorer in each of the accounts"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Cost Explorer apenas visualiza e analisa os custos de cada conta. Ele não agrega o uso entre contas para fins de preço nem gera uma fatura única.",
          "en": "Cost Explorer only views and analyzes each account's costs. It does not aggregate usage across accounts for pricing purposes or produce a single bill."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O faturamento consolidado do AWS Organizations unifica a fatura e agrega o uso das contas para aproveitar descontos por volume.",
      "en": "AWS Organizations consolidated billing unifies the bill and aggregates account usage to take advantage of volume discounts."
    }
  },
  {
    "id": 65,
    "domain": "billing-pricing-support",
    "title": {
      "pt-BR": "Planejamento de custos - Antes da implantação",
      "en": "Cost Planning - Before Deployment"
    },
    "description": {
      "pt-BR": "Uma empresa está planejando migrar uma aplicação para a AWS e quer estimar o custo mensal da arquitetura proposta (EC2, RDS e S3) antes de criar qualquer recurso, compartilhando a estimativa com a diretoria. Qual ferramenta deve usar?",
      "en": "A company is planning to migrate an application to AWS and wants to estimate the monthly cost of the proposed architecture (EC2, RDS, and S3) before creating any resources, sharing the estimate with management. Which tool should it use?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Cost Explorer",
          "en": "AWS Cost Explorer"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Cost Explorer analisa e prevê custos com base no uso histórico da conta. Como nenhum recurso foi criado ainda, não há histórico para estimar a nova arquitetura.",
          "en": "Cost Explorer analyzes and forecasts costs based on the account's historical usage. Since no resources have been created yet, there is no history to estimate the new architecture."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Pricing Calculator",
          "en": "AWS Pricing Calculator"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Pricing Calculator permite modelar os serviços da arquitetura planejada e estimar seu custo mensal antes da implantação, gerando estimativas que podem ser compartilhadas por link ou exportadas.",
          "en": "Pricing Calculator allows modeling the services of the planned architecture and estimating its monthly cost before deployment, producing estimates that can be shared via link or exported."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Budgets",
          "en": "AWS Budgets"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Budgets acompanha gastos reais contra limites definidos e envia alertas. Ele não calcula quanto uma arquitetura ainda não implantada vai custar.",
          "en": "Budgets tracks actual spending against defined limits and sends alerts. It does not calculate how much an architecture not yet deployed will cost."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Trusted Advisor",
          "en": "AWS Trusted Advisor"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Trusted Advisor inspeciona recursos já existentes na conta e recomenda otimizações. Ele não estima o custo de uma arquitetura planejada.",
          "en": "Trusted Advisor inspects resources already in the account and recommends optimizations. It does not estimate the cost of a planned architecture."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Pricing Calculator estima o custo de soluções na AWS antes da implantação.",
      "en": "AWS Pricing Calculator estimates the cost of solutions on AWS before deployment."
    }
  },
  {
    "id": 66,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Uma empresa precisa auditar seus recursos AWS e documentar todas as alterações feitas nas configurações. Qual serviço utilizar?",
      "en": "A company needs to audit its AWS resources and document all configuration changes. Which service should it use?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Artifact",
          "en": "AWS Artifact"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Artifact disponibiliza relatórios e documentos de conformidade da AWS, como certificações e acordos. Ele não mantém o histórico das configurações dos recursos da conta.",
          "en": "AWS Artifact provides AWS compliance reports and documents, such as certifications and agreements. It does not maintain a history of resource configurations in the account."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Inspector",
          "en": "Amazon Inspector"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Inspector avalia continuamente recursos compatíveis em busca de vulnerabilidades de software e exposição não intencional à rede. Ele não é o serviço para registrar alterações de configuração.",
          "en": "Amazon Inspector continuously assesses supported resources for software vulnerabilities and unintended network exposure. It is not the service for recording configuration changes."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Config",
          "en": "AWS Config"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Config registra configurações dos recursos e suas alterações ao longo do tempo, além de permitir avaliar recursos com regras de conformidade. Isso fornece o histórico de auditoria de configuração solicitado.",
          "en": "AWS Config records resource configurations and their changes over time, and can evaluate resources against compliance rules. This provides the requested configuration audit history."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon CloudWatch",
          "en": "Amazon CloudWatch"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon CloudWatch coleta métricas, logs e eventos e pode gerar alarmes para monitoramento operacional. Ele não mantém o histórico de configuração dos recursos com o propósito de auditoria oferecido pelo AWS Config.",
          "en": "Amazon CloudWatch collects metrics, logs, and events and can raise alarms for operational monitoring. It does not maintain resource configuration history for auditing in the way AWS Config does."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Config registra e acompanha as configurações dos recursos AWS ao longo do tempo, permitindo auditar alterações e avaliar conformidade. O AWS CloudTrail registra atividade de API, enquanto Artifact fornece documentos de conformidade, Inspector avalia vulnerabilidades e CloudWatch monitora métricas e eventos.",
      "en": "AWS Config records and tracks AWS resource configurations over time, enabling change audits and compliance evaluation. AWS CloudTrail records API activity, while Artifact provides compliance documents, Inspector assesses vulnerabilities, and CloudWatch monitors metrics and events."
    }
  },
  {
    "id": 67,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Rede e infraestrutura global",
      "en": "Networking and global infrastructure"
    },
    "description": {
      "pt-BR": "Qual serviço AWS pode criar cópias de recursos em diferentes regiões usando templates de infraestrutura?",
      "en": "Which AWS service can create copies of resources in different Regions using infrastructure templates?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon ElastiCache",
          "en": "Amazon ElastiCache"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon ElastiCache fornece caches em memória gerenciados para reduzir a latência de acesso a dados. Não é uma ferramenta para criar cópias de arquiteturas usando templates de infraestrutura.",
          "en": "Amazon ElastiCache provides managed in-memory caches to reduce data-access latency. It is not a tool for reproducing architectures with infrastructure templates."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Systems Manager",
          "en": "AWS Systems Manager"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Systems Manager ajuda a operar e administrar recursos, como nós gerenciados e parâmetros de configuração. Não descreve e replica pilhas de recursos entre regiões como o CloudFormation.",
          "en": "AWS Systems Manager helps operate and administer resources, such as managed nodes and configuration parameters. It does not describe and replicate resource stacks across Regions like CloudFormation."
        }
      },
      {
        "title": {
          "pt-BR": "AWS CloudTrail",
          "en": "AWS CloudTrail"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS CloudTrail registra chamadas de API e outras atividades da conta para auditoria e investigação. Ele não provisiona recursos a partir de templates.",
          "en": "AWS CloudTrail records API calls and other account activity for auditing and investigation. It does not provision resources from templates."
        }
      },
      {
        "title": {
          "pt-BR": "AWS CloudFormation",
          "en": "AWS CloudFormation"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS CloudFormation usa templates para definir e provisionar pilhas de recursos de forma repetível, inclusive em regiões diferentes. Assim, equipes podem criar cópias consistentes da infraestrutura desejada.",
          "en": "AWS CloudFormation uses templates to define and provision resource stacks repeatably, including in different Regions. Teams can therefore create consistent copies of the desired infrastructure."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS CloudFormation provisiona e gerencia conjuntos de recursos descritos em templates, permitindo reproduzir uma infraestrutura em diferentes regiões. ElastiCache é cache gerenciado, Systems Manager apoia operações e gerenciamento de nós, e CloudTrail registra atividade de API, não define infraestrutura como código.",
      "en": "AWS CloudFormation provisions and manages sets of resources described in templates, allowing infrastructure to be reproduced across Regions. ElastiCache is a managed cache, Systems Manager supports operations and node management, and CloudTrail records API activity rather than defining infrastructure as code."
    }
  },
  {
    "id": 68,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Modelo de responsabilidade compartilhada",
      "en": "Shared responsibility model"
    },
    "description": {
      "pt-BR": "Qual responsabilidade é compartilhada entre o cliente e a AWS?",
      "en": "Which responsibility is shared between the customer and AWS?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Fornecer chave de criptografia do lado cliente",
          "en": "Provide a client-side encryption key"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O cliente é responsável por proteger seus dados e escolher e gerenciar mecanismos e chaves de criptografia do lado do cliente. A AWS oferece serviços de criptografia, mas não fornece a chave privada controlada pelo cliente.",
          "en": "The customer is responsible for protecting its data and choosing and managing customer-side encryption mechanisms and keys. AWS offers encryption services but does not provide the customer's controlled private key."
        }
      },
      {
        "title": {
          "pt-BR": "Oferecer conscientização e treinamento",
          "en": "Provide awareness and training"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "A conscientização e o treinamento de segurança envolvem a AWS, que protege e treina sua força de trabalho e oferece orientações e recursos de segurança, e o cliente, que treina seus próprios funcionários. Por isso, essa atividade é compartilhada.",
          "en": "Security awareness and training involve AWS, which protects and trains its workforce and provides security guidance and resources, and the customer, which trains its own employees. The responsibility is therefore shared."
        }
      },
      {
        "title": {
          "pt-BR": "Controlar data centers físicos",
          "en": "Manage physical data centers"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A proteção física das instalações e dos data centers é responsabilidade da AWS como parte da segurança da nuvem. O cliente não controla esses locais.",
          "en": "Physical protection of facilities and data centers is AWS's responsibility as part of security of the cloud. The customer does not control these locations."
        }
      },
      {
        "title": {
          "pt-BR": "Configurar instância EC2",
          "en": "Configure an EC2 instance"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O cliente configura e protege o sistema operacional, as aplicações e as regras de rede de suas instâncias Amazon EC2, conforme o modelo de implantação. A AWS protege a infraestrutura subjacente, mas não escolhe a configuração da instância do cliente.",
          "en": "The customer configures and secures the operating system, applications, and network rules for its Amazon EC2 instances, depending on the deployment model. AWS secures the underlying infrastructure but does not choose the customer's instance configuration."
        }
      }
    ],
    "explanation": {
      "pt-BR": "A conscientização e o treinamento de segurança dependem tanto da infraestrutura e orientação oferecidas pela AWS quanto da capacitação dos funcionários do cliente, portanto são uma responsabilidade compartilhada. A segurança física dos data centers cabe à AWS; chaves de dados e configuração de instâncias EC2 ficam sob controle do cliente.",
      "en": "Security awareness and training depend on both AWS-provided infrastructure and guidance and the customer's employee training, making them a shared responsibility. Physical data center security belongs to AWS, while data keys and EC2 instance configuration are controlled by the customer."
    }
  },
  {
    "id": 69,
    "domain": "billing-pricing-support",
    "title": {
      "pt-BR": "Preços, custos e suporte",
      "en": "Pricing, costs and support"
    },
    "description": {
      "pt-BR": "Qual ferramenta ajuda a determinar se é preciso solicitar aumento da quota de serviço de VPC?",
      "en": "Which tool helps determine whether a VPC service quota increase should be requested?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Service Catalog",
          "en": "AWS Service Catalog"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Service Catalog permite organizar e distribuir produtos de infraestrutura aprovados para usuários. Ele não analisa a utilização atual das quotas de serviço para recomendar aumentos.",
          "en": "AWS Service Catalog lets organizations organize and distribute approved infrastructure products to users. It does not analyze current service quota usage to recommend increases."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Health Dashboard",
          "en": "AWS Health Dashboard"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Health Dashboard apresenta eventos e avisos sobre a saúde dos serviços e recursos AWS, inclusive eventos específicos da conta. Não é a ferramenta de análise de utilização de quotas do Trusted Advisor.",
          "en": "AWS Health Dashboard presents events and notices about the health of AWS services and resources, including account-specific events. It is not the Trusted Advisor tool for analyzing quota utilization."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Trusted Advisor",
          "en": "AWS Trusted Advisor"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Trusted Advisor analisa a conta em relação a verificações de boas práticas, incluindo quotas e limites de serviço. Suas verificações ajudam a perceber quando a capacidade disponível pode exigir um pedido de aumento.",
          "en": "AWS Trusted Advisor analyzes an account against best-practice checks, including service quotas and limits. Its checks help identify when available capacity may require an increase request."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Cost and Usage Report",
          "en": "AWS Cost and Usage Report"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Cost and Usage Report fornece dados detalhados de custos e consumo dos serviços para análise financeira. Ele não é voltado a acompanhar limites de recursos de VPC.",
          "en": "AWS Cost and Usage Report provides detailed service cost and usage data for financial analysis. It is not designed to track VPC resource limits."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Trusted Advisor verifica práticas recomendadas e pode mostrar o uso de quotas e limites de serviço, ajudando a identificar quando solicitar um aumento para recursos de VPC. Service Catalog disponibiliza produtos aprovados, Health Dashboard informa eventos que afetam serviços e Cost and Usage Report detalha custos e uso faturável.",
      "en": "AWS Trusted Advisor checks best practices and can show service quota and limit usage, helping identify when to request an increase for VPC resources. Service Catalog provides approved products, Health Dashboard reports events affecting services, and Cost and Usage Report details costs and billable usage."
    }
  },
  {
    "id": 70,
    "domain": "billing-pricing-support",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Qual princípio de design se aplica ao dimensionamento correto (right sizing) da infraestrutura AWS?",
      "en": "Which design principle applies to right-sizing AWS infrastructure?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Escalar horizontalmente",
          "en": "Scale horizontally"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Escalar horizontalmente significa adicionar ou remover instâncias para atender à demanda. Isso melhora a capacidade de escala, mas não é, por si só, o princípio de adequar o tamanho dos recursos para reduzir custos.",
          "en": "Horizontal scaling means adding or removing instances to meet demand. It improves scalability, but is not itself the principle of sizing resources appropriately to reduce cost."
        }
      },
      {
        "title": {
          "pt-BR": "Fazer mudanças frequentes e reversíveis",
          "en": "Make frequent, reversible changes"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Fazer mudanças frequentes e reversíveis permite experimentar e desfazer alterações com menor risco. Esse princípio trata da agilidade operacional, não do ajuste de capacidade visando economia.",
          "en": "Making frequent, reversible changes enables experimentation and safer rollbacks. This principle concerns operational agility, not capacity adjustment for savings."
        }
      },
      {
        "title": {
          "pt-BR": "Executar operações como código",
          "en": "Perform operations as code"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Executar operações como código automatiza e padroniza atividades operacionais por meio de código. Isso não descreve diretamente a seleção de tipos e tamanhos de recursos pelo custo e pela demanda.",
          "en": "Performing operations as code automates and standardizes operational activities through code. It does not directly describe selecting resource types and sizes based on cost and demand."
        }
      },
      {
        "title": {
          "pt-BR": "Otimizar para fins de custo",
          "en": "Optimize for cost"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Otimizar para fins de custo significa escolher e ajustar recursos para atender à necessidade sem pagar por capacidade excessiva. O right sizing aplica esse princípio ao adequar tamanho e tipo de instância ao uso observado.",
          "en": "Optimizing for cost means choosing and adjusting resources to meet needs without paying for excess capacity. Right-sizing applies this principle by matching instance size and type to observed usage."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O dimensionamento correto ajusta os recursos à carga real, reduzindo capacidade ociosa e gastos desnecessários; por isso, aplica o princípio de otimizar para fins de custo. Escalabilidade horizontal, mudanças reversíveis e operações como código são princípios úteis, mas não expressam diretamente a motivação de custo do right sizing.",
      "en": "Right-sizing matches resources to actual workload, reducing idle capacity and unnecessary spending; it therefore applies the principle of optimizing for cost. Horizontal scaling, reversible changes, and operations as code are useful principles, but they do not directly express the cost rationale for right-sizing."
    }
  },
  {
    "id": 71,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Um profissional pretende replicar dados entre várias áreas geográficas para recuperação de desastres. Qual componente usar?",
      "en": "A professional wants to replicate data across multiple geographic areas for disaster recovery. Which component should be used?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Contas AWS",
          "en": "Contas AWS"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Contas AWS separam administração, permissões e faturamento, e podem ser usadas em estratégias de isolamento. Elas não são, por si, locais geográficos para replicar dados.",
          "en": "AWS accounts separate administration, permissions, and billing, and can be used in isolation strategies. They are not geographic locations for replicating data."
        }
      },
      {
        "title": {
          "pt-BR": "Edge Locations",
          "en": "Edge Locations"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Edge Locations são pontos de presença usados por serviços como o Amazon CloudFront para aproximar conteúdo dos usuários. Não são regiões de armazenamento e recuperação de desastres regionais.",
          "en": "Edge Locations are points of presence used by services such as Amazon CloudFront to bring content closer to users. They are not Regions for regional disaster-recovery storage."
        }
      },
      {
        "title": {
          "pt-BR": "Availability Zones",
          "en": "Availability Zones"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "As Zonas de disponibilidade são locais isolados dentro de uma Região e ajudam a obter alta disponibilidade e resiliência contra falhas locais. Para separar cópias por áreas geográficas distintas, a escolha adequada são Regiões diferentes.",
          "en": "Availability Zones are isolated locations within a Region and help provide high availability and resilience to local failures. To separate copies across distinct geographic areas, use different Regions."
        }
      },
      {
        "title": {
          "pt-BR": "Regiões AWS",
          "en": "AWS Regions"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "As Regiões AWS são áreas geográficas independentes, cada uma com várias Zonas de disponibilidade. Replicar dados entre regiões separa cópias geograficamente e ajuda a recuperar workloads após uma interrupção regional.",
          "en": "AWS Regions are independent geographic areas, each with multiple Availability Zones. Replicating data across Regions separates copies geographically and helps recover workloads after a regional disruption."
        }
      }
    ],
    "explanation": {
      "pt-BR": "As Regiões AWS são áreas geográficas distintas, e a replicação entre regiões pode manter dados em locais separados para apoiar recuperação de desastres regionais. Zonas de disponibilidade são locais isolados dentro de uma mesma região, Edge Locations atendem principalmente à entrega de conteúdo, e contas AWS são limites administrativos e de cobrança.",
      "en": "AWS Regions are distinct geographic areas, and cross-Region replication can keep data in separate locations to support regional disaster recovery. Availability Zones are isolated locations within one Region, Edge Locations primarily serve content delivery, and AWS accounts are administrative and billing boundaries."
    }
  },
  {
    "id": 72,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Qual serviço computacional da AWS é serverless?",
      "en": "Which AWS compute service is serverless?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Lambda",
          "en": "AWS Lambda"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Lambda executa funções em resposta a eventos e gerencia automaticamente a infraestrutura de computação subjacente. O cliente paga pelo uso de execução, sem administrar servidores.",
          "en": "AWS Lambda runs functions in response to events and automatically manages the underlying compute infrastructure. Customers pay for execution usage without administering servers."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon RDS",
          "en": "Amazon RDS"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon RDS facilita a configuração, operação e escalabilidade de bancos de dados relacionais gerenciados. Seu propósito é banco de dados, não execução geral de código serverless como serviço de computação.",
          "en": "Amazon RDS simplifies the setup, operation, and scaling of managed relational databases. Its purpose is database management, not general serverless code execution as a compute service."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon ECS",
          "en": "Amazon ECS"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon ECS é um serviço de orquestração para executar e gerenciar contêineres. O ECS pode ser usado com opções de infraestrutura diferentes, mas a alternativa não é o serviço de funções serverless indicado aqui.",
          "en": "Amazon ECS is an orchestration service for running and managing containers. ECS can be used with different infrastructure options, but it is not the serverless functions service sought here."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon EC2",
          "en": "Amazon EC2"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon EC2 fornece instâncias de máquinas virtuais, cuja escolha, configuração e administração cabem ao cliente. Embora elimine a compra de hardware, não é serverless porque o cliente ainda gerencia as instâncias.",
          "en": "Amazon EC2 provides virtual machine instances whose selection, configuration, and administration are the customer's responsibility. Although it eliminates hardware purchasing, it is not serverless because customers still manage instances."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Lambda executa código sem que o cliente provisione ou administre servidores, sendo um serviço de computação serverless. RDS é um serviço gerenciado de banco de dados, ECS orquestra contêineres e EC2 fornece máquinas virtuais cuja capacidade de computação o cliente administra.",
      "en": "AWS Lambda runs code without requiring the customer to provision or manage servers, making it a serverless compute service. RDS is a managed database service, ECS orchestrates containers, and EC2 provides virtual machines whose compute capacity the customer manages."
    }
  },
  {
    "id": 73,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "IAM e identidades",
      "en": "IAM and identities"
    },
    "description": {
      "pt-BR": "Quais são características de usuários e grupos do IAM? (Selecione duas.)",
      "en": "Which statements describe IAM users and groups? (Select two.)"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": true,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Grupos contêm somente usuários e não são aninhados",
          "en": "Groups contain only users and cannot be nested"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Um grupo do IAM é uma coleção de usuários, não de grupos; portanto, grupos não são aninhados. Essa é uma característica correta dos grupos do IAM.",
          "en": "An IAM group is a collection of users, not groups, so groups cannot be nested. This is a correct characteristic of IAM groups."
        }
      },
      {
        "title": {
          "pt-BR": "Usuário pode integrar apenas um grupo",
          "en": "A user can belong to only one group"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Um usuário do IAM pode pertencer a mais de um grupo, recebendo permissões associadas a cada grupo. A afirmação de que só pode integrar um grupo está incorreta.",
          "en": "An IAM user can belong to more than one group and receive permissions associated with each group. The claim that a user can belong to only one group is incorrect."
        }
      },
      {
        "title": {
          "pt-BR": "Usuário pode integrar vários grupos",
          "en": "A user can belong to multiple groups"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Um usuário do IAM pode ser membro de vários grupos ao mesmo tempo, o que facilita organizar funções e permissões. Essa é uma característica correta do IAM.",
          "en": "An IAM user can be a member of multiple groups at the same time, which helps organize roles and permissions. This is a correct IAM characteristic."
        }
      },
      {
        "title": {
          "pt-BR": "Todos os usuários entram num grupo padrão",
          "en": "All users join a default group"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O IAM não adiciona automaticamente todos os usuários a um grupo padrão. Administradores escolhem explicitamente a associação a grupos e as permissões correspondentes.",
          "en": "IAM does not automatically add every user to a default group. Administrators explicitly choose group membership and the corresponding permissions."
        }
      },
      {
        "title": {
          "pt-BR": "Grupos podem conter outros grupos",
          "en": "Groups can contain other groups"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Grupos do IAM não podem conter outros grupos; eles contêm usuários. A estrutura de grupos aninhados descrita não é suportada.",
          "en": "IAM groups cannot contain other groups; they contain users. The nested-group structure described is not supported."
        }
      }
    ],
    "explanation": {
      "pt-BR": "No IAM, grupos organizam usuários para atribuição coletiva de permissões e podem conter usuários, mas não outros grupos. Um usuário pode pertencer a vários grupos; não há grupo padrão ao qual todos os novos usuários sejam adicionados automaticamente.",
      "en": "In IAM, groups organize users for collective permission assignment and can contain users, but not other groups. A user can belong to multiple groups; there is no default group to which all new users are automatically added."
    }
  },
  {
    "id": 74,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Rede e infraestrutura global",
      "en": "Networking and global infrastructure"
    },
    "description": {
      "pt-BR": "Qual serviço ajuda a evitar ataques DDoS na camada de rede?",
      "en": "Which service helps prevent DDoS attacks at the network layer?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon GuardDuty",
          "en": "Amazon GuardDuty"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon GuardDuty analisa fontes de dados e sinais para detectar ameaças e atividades suspeitas na conta. Ele não é o serviço de mitigação DDoS de rede.",
          "en": "Amazon GuardDuty analyzes data sources and signals to detect threats and suspicious account activity. It is not the network DDoS mitigation service."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Firewall Manager",
          "en": "AWS Firewall Manager"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Firewall Manager administra centralmente políticas de firewall e segurança para várias contas e recursos. Ele pode gerenciar políticas do Shield, mas o serviço que fornece proteção DDoS é o AWS Shield.",
          "en": "AWS Firewall Manager centrally manages firewall and security policies across multiple accounts and resources. It can manage Shield policies, but AWS Shield is the service that provides DDoS protection."
        }
      },
      {
        "title": {
          "pt-BR": "AWS WAF",
          "en": "AWS WAF"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS WAF ajuda a proteger aplicações Web filtrando solicitações HTTP e HTTPS por regras, atuando na camada de aplicação. Para proteção contra ataques DDoS de rede, a opção apropriada é o AWS Shield.",
          "en": "AWS WAF helps protect web applications by filtering HTTP and HTTPS requests with rules at the application layer. For network-layer DDoS protection, AWS Shield is the appropriate choice."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Shield",
          "en": "AWS Shield"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Shield é um serviço gerenciado de proteção contra DDoS para recursos AWS compatíveis. O Shield Standard oferece proteção automática contra ataques comuns de rede e transporte.",
          "en": "AWS Shield is a managed DDoS protection service for supported AWS resources. Shield Standard provides automatic protection against common network- and transport-layer attacks."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Shield fornece proteção gerenciada contra ataques Distributed Denial of Service (DDoS), incluindo proteção contra ataques comuns de rede e transporte. GuardDuty detecta ameaças, Firewall Manager centraliza políticas de segurança e AWS WAF filtra solicitações HTTP e HTTPS na camada de aplicação.",
      "en": "AWS Shield provides managed protection against Distributed Denial of Service (DDoS) attacks, including common network- and transport-layer attacks. GuardDuty detects threats, Firewall Manager centrally manages security policies, and AWS WAF filters HTTP and HTTPS requests at the application layer."
    }
  },
  {
    "id": 75,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "AWS Well-Architected e resiliência",
      "en": "Well-Architected and resilience"
    },
    "description": {
      "pt-BR": "Quais princípios aumentam a confiabilidade (Reliability)? (Selecione duas.)",
      "en": "Which principles improve reliability? (Select two.)"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": true,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Recuperar-se automaticamente de falhas",
          "en": "Recover automatically from failures"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "A recuperação automática detecta falhas e restaura a operação sem depender de intervenção manual imediata, reduzindo o impacto de interrupções. Esse é um princípio recomendado para workloads confiáveis.",
          "en": "Automatic recovery detects failures and restores operation without relying on immediate manual intervention, reducing the impact of disruptions. This is a recommended principle for reliable workloads."
        }
      },
      {
        "title": {
          "pt-BR": "Adotar modelo de consumo",
          "en": "Adopt a consumption model"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Adotar um modelo de consumo permite pagar pelos recursos conforme o uso e é principalmente um princípio de otimização de custos. Sozinho, não aumenta a capacidade de recuperação diante de falhas.",
          "en": "Adopting a consumption model allows customers to pay for resources as they use them and is primarily a cost-optimization principle. By itself, it does not improve recovery from failures."
        }
      },
      {
        "title": {
          "pt-BR": "Usar arquitetura monolítica",
          "en": "Use a monolithic architecture"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Uma arquitetura monolítica reúne componentes em uma unidade mais acoplada e não é uma prática recomendada específica para aumentar confiabilidade. O desenho deve considerar isolamento de falhas e recuperação, que não decorrem automaticamente de um monólito.",
          "en": "A monolithic architecture groups components into a more tightly coupled unit and is not a specific recommended practice for improving reliability. Design should consider fault isolation and recovery, neither of which follows automatically from a monolith."
        }
      },
      {
        "title": {
          "pt-BR": "Testar procedimentos de recuperação",
          "en": "Test recovery procedures"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Testar procedimentos de recuperação verifica se os planos funcionam e ajuda a revelar falhas antes de um incidente real. Isso reduz o risco de uma recuperação não funcionar quando necessária.",
          "en": "Testing recovery procedures verifies that plans work and helps uncover failures before a real incident. This reduces the risk of recovery not working when needed."
        }
      },
      {
        "title": {
          "pt-BR": "Avaliar eficiência geral",
          "en": "Evaluate overall efficiency"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Avaliar eficiência geral pode ajudar a revisar um workload, mas não identifica por si só se ele resiste a falhas ou se pode se recuperar delas. A confiabilidade exige práticas concretas, como recuperação automática e testes de recuperação.",
          "en": "Evaluating overall efficiency can help review a workload, but does not by itself establish whether it withstands or recovers from failures. Reliability requires concrete practices such as automatic recovery and recovery testing."
        }
      }
    ],
    "explanation": {
      "pt-BR": "A confiabilidade é reforçada ao projetar workloads para detectar falhas e recuperar-se automaticamente, e ao testar regularmente os procedimentos de recuperação. Modelo de consumo está ligado à otimização de custos, arquitetura monolítica não é um princípio de confiabilidade, e avaliar eficiência geral é vago e não substitui testes de recuperação.",
      "en": "Reliability improves when workloads are designed to detect failures and recover automatically, and when recovery procedures are tested regularly. A consumption model is associated with cost optimization, a monolithic architecture is not a reliability principle, and evaluating overall efficiency is vague and does not replace recovery testing."
    }
  },
  {
    "id": 76,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "AWS Well-Architected e resiliência",
      "en": "Well-Architected and resilience"
    },
    "description": {
      "pt-BR": "Um sistema recupera-se automaticamente de falhas. Qual pilar Well-Architected representa isso?",
      "en": "A system automatically recovers from failures. Which Well-Architected pillar does this represent?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Otimização de custos",
          "en": "Cost optimization"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O pilar de otimização de custos busca entregar valor de negócio ao menor custo adequado. Ele não se concentra principalmente na recuperação de falhas.",
          "en": "The Cost Optimization pillar seeks to deliver business value at an appropriate lower cost. It is not primarily focused on recovering from failures."
        }
      },
      {
        "title": {
          "pt-BR": "Eficiência de desempenho",
          "en": "Performance efficiency"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O pilar de eficiência de desempenho trata do uso eficiente de recursos computacionais e da manutenção do desempenho conforme a demanda muda. Recuperar-se de falhas é responsabilidade do pilar de confiabilidade.",
          "en": "The Performance Efficiency pillar concerns efficient use of computing resources and maintaining performance as demand changes. Recovering from failures belongs to the Reliability pillar."
        }
      },
      {
        "title": {
          "pt-BR": "Excelência operacional",
          "en": "Operational excellence"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O pilar de excelência operacional concentra-se em executar e monitorar sistemas e em melhorar processos e procedimentos. Embora operações eficazes apoiem a confiabilidade, recuperação automática de falhas é característica do pilar de confiabilidade.",
          "en": "The Operational Excellence pillar focuses on running and monitoring systems and improving processes and procedures. Although effective operations support reliability, automatic recovery from failures is a Reliability pillar characteristic."
        }
      },
      {
        "title": {
          "pt-BR": "Confiabilidade",
          "en": "Reliability"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O pilar de confiabilidade inclui projetar workloads distribuídos e resilientes, monitorar falhas e recuperar-se delas. Recuperação automática é um exemplo direto desse princípio.",
          "en": "The Reliability pillar includes designing distributed, resilient workloads, monitoring for failures, and recovering from them. Automatic recovery is a direct example of this principle."
        }
      }
    ],
    "explanation": {
      "pt-BR": "A confiabilidade, um pilar do AWS Well-Architected Framework, trata da capacidade de um workload executar corretamente e recuperar-se de falhas. Recuperação automática é uma prática diretamente associada a esse pilar, não a custo, desempenho ou excelência operacional.",
      "en": "Reliability, a pillar of the AWS Well-Architected Framework, concerns a workload's ability to perform correctly and recover from failures. Automatic recovery is directly associated with this pillar, not cost, performance, or operational excellence."
    }
  },
  {
    "id": 77,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Rede e infraestrutura global",
      "en": "Networking and global infrastructure"
    },
    "description": {
      "pt-BR": "Qual serviço monitora CPU e tráfego de rede das instâncias EC2?",
      "en": "Which service monitors CPU and network traffic for EC2 instances?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon Inspector",
          "en": "Amazon Inspector"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Inspector identifica vulnerabilidades e exposições de rede em recursos compatíveis. Não é o serviço de monitoramento de métricas de desempenho como CPU e tráfego.",
          "en": "Amazon Inspector identifies vulnerabilities and network exposure in supported resources. It is not the service for monitoring performance metrics such as CPU and traffic."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon CloudWatch",
          "en": "Amazon CloudWatch"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Amazon CloudWatch coleta e apresenta métricas de EC2, incluindo utilização de CPU e bytes ou pacotes de rede, e permite criar alarmes. É o serviço de monitoramento operacional pedido.",
          "en": "Amazon CloudWatch collects and presents EC2 metrics, including CPU utilization and network bytes or packets, and allows alarms to be created. It is the requested operational monitoring service."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Config",
          "en": "AWS Config"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Config acompanha configurações e alterações dos recursos AWS e pode verificar conformidade com regras. Ele não é o serviço principal para métricas de CPU e rede.",
          "en": "AWS Config tracks AWS resource configurations and changes and can check compliance against rules. It is not the primary service for CPU and network metrics."
        }
      },
      {
        "title": {
          "pt-BR": "AWS CloudTrail",
          "en": "AWS CloudTrail"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS CloudTrail registra atividade da conta, como chamadas de API feitas por usuários e serviços. Esse histórico de auditoria não substitui as métricas de desempenho do CloudWatch.",
          "en": "AWS CloudTrail records account activity, such as API calls made by users and services. This audit history does not replace CloudWatch performance metrics."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Amazon CloudWatch monitora métricas operacionais de instâncias EC2, incluindo métricas padrão como utilização de CPU e tráfego de rede, e pode acionar alarmes. Inspector avalia vulnerabilidades, Config registra configurações de recursos e CloudTrail registra chamadas de API.",
      "en": "Amazon CloudWatch monitors operational metrics for EC2 instances, including standard metrics such as CPU utilization and network traffic, and can trigger alarms. Inspector assesses vulnerabilities, Config records resource configurations, and CloudTrail records API calls."
    }
  },
  {
    "id": 78,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Banco de dados e análise",
      "en": "Databases and analytics"
    },
    "description": {
      "pt-BR": "Qual serviço analisa petabytes de dados estruturados e semiestruturados com SQL para BI, inclusive dados no S3?",
      "en": "Which service analyzes petabytes of structured and semi-structured data using SQL for BI, including data in S3?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon Neptune",
          "en": "Amazon Neptune"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Neptune é um banco de dados de grafos gerenciado, adequado a dados com relações complexas, como redes sociais. Ele não é um data warehouse para análises SQL de petabytes de dados variados.",
          "en": "Amazon Neptune is a managed graph database suited to data with complex relationships, such as social networks. It is not a data warehouse for SQL analytics on petabytes of varied data."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon RDS",
          "en": "Amazon RDS"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon RDS simplifica a operação de bancos de dados relacionais para aplicações transacionais. Embora ofereça suporte a SQL, não é o data warehouse analítico projetado para esse tipo de consulta em escala de petabytes.",
          "en": "Amazon RDS simplifies operating relational databases for transactional applications. Although it supports SQL, it is not the analytical data warehouse designed for this kind of petabyte-scale query."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Redshift",
          "en": "Amazon Redshift"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Amazon Redshift é um serviço de data warehouse otimizado para consultas analíticas SQL em grandes volumes de dados estruturados e semiestruturados. Com o Redshift Spectrum, também é possível consultar dados diretamente no Amazon S3.",
          "en": "Amazon Redshift is a data warehouse service optimized for SQL analytics on large volumes of structured and semi-structured data. Redshift Spectrum also enables querying data directly in Amazon S3."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon DynamoDB",
          "en": "Amazon DynamoDB"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon DynamoDB é um banco NoSQL gerenciado de chave-valor e documentos, projetado para acesso de baixa latência em escala. Não é um data warehouse relacional para análises SQL em petabytes.",
          "en": "Amazon DynamoDB is a managed NoSQL key-value and document database designed for low-latency access at scale. It is not a relational data warehouse for petabyte-scale SQL analytics."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Amazon Redshift é um data warehouse em nuvem que executa análises SQL em grande escala sobre dados estruturados e semiestruturados, podendo consultar dados no Amazon S3 por meio do Redshift Spectrum. Neptune é banco de grafos, RDS é banco relacional transacional gerenciado e DynamoDB é banco NoSQL de chave-valor e documentos.",
      "en": "Amazon Redshift is a cloud data warehouse that runs large-scale SQL analytics on structured and semi-structured data and can query data in Amazon S3 through Redshift Spectrum. Neptune is a graph database, RDS is a managed transactional relational database, and DynamoDB is a NoSQL key-value and document database."
    }
  },
  {
    "id": 79,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Modelo de responsabilidade compartilhada",
      "en": "Shared responsibility model"
    },
    "description": {
      "pt-BR": "No modelo de responsabilidade compartilhada, quais tarefas são da AWS? (Selecione duas.)",
      "en": "Under the shared responsibility model, which tasks are AWS's responsibility? (Select two.)"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": true,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Atualizar hipervisor",
          "en": "Update the hypervisor"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "A AWS mantém e atualiza o hipervisor que sustenta a infraestrutura de virtualização da nuvem. Essa camada subjacente é responsabilidade da AWS.",
          "en": "AWS maintains and updates the hypervisor that supports the cloud virtualization infrastructure. This underlying layer is AWS's responsibility."
        }
      },
      {
        "title": {
          "pt-BR": "Criptografar dados do cliente",
          "en": "Encrypt customer data"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O cliente é responsável por classificar e proteger seus dados e por escolher opções de criptografia adequadas, conforme os serviços usados. A AWS fornece recursos de criptografia, mas a proteção dos dados do cliente permanece sob sua responsabilidade.",
          "en": "The customer is responsible for classifying and protecting its data and choosing appropriate encryption options, depending on the services used. AWS provides encryption capabilities, but protecting customer data remains the customer's responsibility."
        }
      },
      {
        "title": {
          "pt-BR": "Definir firewall dentro da VPC",
          "en": "Configure the firewall within the VPC"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O cliente define e administra controles de tráfego da VPC, como grupos de segurança e listas de controle de acesso à rede, conforme sua arquitetura. Esses controles de rede não são configurados pela AWS em nome do cliente.",
          "en": "The customer defines and manages VPC traffic controls, such as security groups and network access control lists, according to its architecture. AWS does not configure these network controls on the customer's behalf."
        }
      },
      {
        "title": {
          "pt-BR": "Aplicar patches no SO de EC2",
          "en": "Patch the EC2 operating system"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Para instâncias EC2, o cliente é responsável por gerenciar o sistema operacional convidado, incluindo a aplicação de patches, salvo serviços gerenciados que alterem essa divisão. A AWS mantém a infraestrutura física e de virtualização subjacente.",
          "en": "For EC2 instances, the customer is responsible for managing the guest operating system, including applying patches, except where managed services change that division. AWS maintains the underlying physical and virtualization infrastructure."
        }
      },
      {
        "title": {
          "pt-BR": "Garantir segurança física das instalações",
          "en": "Ensure the physical security of facilities"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "A AWS controla a segurança física de seus data centers, incluindo instalações e infraestrutura física. Essa tarefa está na camada de segurança da nuvem, sob responsabilidade da AWS.",
          "en": "AWS controls the physical security of its data centers, including facilities and physical infrastructure. This task falls under security of the cloud and is AWS's responsibility."
        }
      }
    ],
    "explanation": {
      "pt-BR": "No modelo de responsabilidade compartilhada, a AWS protege a infraestrutura da nuvem, incluindo hipervisores e segurança física das instalações. O cliente normalmente protege e criptografa seus dados, configura controles de rede da VPC e aplica patches ao sistema operacional de suas instâncias EC2.",
      "en": "Under the Shared Responsibility Model, AWS secures the infrastructure of the cloud, including hypervisors and the physical security of facilities. The customer typically protects and encrypts its data, configures VPC network controls, and patches the operating system on its EC2 instances."
    }
  },
  {
    "id": 80,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Como colocar duas EC2 em data centers separados com baixa latência entre eles?",
      "en": "How can two EC2 instances be placed in separate data centers with low latency between them?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Em duas regiões com VPC Peering",
          "en": "In two Regions with VPC peering"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Duas Regiões são áreas geográficas distintas, normalmente muito mais distantes entre si do que duas Zonas de disponibilidade na mesma Região. VPC Peering fornece conectividade privada, mas não garante baixa latência entre regiões separadas.",
          "en": "Two Regions are distinct geographic areas, typically much farther apart than two Availability Zones in the same Region. VPC peering provides private connectivity but does not guarantee low latency between separate Regions."
        }
      },
      {
        "title": {
          "pt-BR": "Em duas AZs da mesma região",
          "en": "In two Availability Zones in the same Region"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "As Zonas de disponibilidade são data centers ou grupos de data centers isolados dentro de uma Região e interligados por rede redundante de baixa latência. Distribuir as duas instâncias entre Zonas distintas atende à separação física e à conectividade rápida.",
          "en": "Availability Zones are isolated data centers or groups of data centers within a Region, interconnected by a redundant low-latency network. Distributing the two instances across separate Zones provides physical separation and fast connectivity."
        }
      },
      {
        "title": {
          "pt-BR": "Uma on premises e outra via VPN",
          "en": "One on premises and the other over a VPN"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Uma conexão VPN entre uma instalação on premises e a AWS fornece conectividade criptografada pela rede, mas acrescenta dependências de internet ou de conectividade externa. Essa arquitetura não oferece a proximidade e a latência previsível entre duas Zonas na mesma Região.",
          "en": "A VPN connection between an on-premises facility and AWS provides encrypted network connectivity, but adds internet or external-connectivity dependencies. This architecture does not provide the proximity and predictable latency between two Zones in the same Region."
        }
      },
      {
        "title": {
          "pt-BR": "Em cluster placement group",
          "en": "In a cluster placement group"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Um cluster placement group posiciona instâncias próximas para obter baixa latência e alta largura de banda entre elas. Essa proximidade não corresponde ao requisito de colocá-las em data centers separados, pois o grupo tende a mantê-las juntas na mesma Zona de disponibilidade.",
          "en": "A cluster placement group places instances close together to achieve low latency and high throughput between them. That proximity does not meet the requirement to place them in separate data centers, since the group tends to keep them together in the same Availability Zone."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Zonas de disponibilidade são locais distintos e isolados dentro da mesma Região, conectados por uma rede redundante de baixa latência; distribuir instâncias entre elas separa os data centers e mantém conectividade rápida. Um cluster placement group otimiza a baixa latência ao posicionar instâncias próximas, não em data centers separados; regiões diferentes e uma VPN não oferecem a mesma proximidade regional.",
      "en": "Availability Zones are distinct, isolated locations within the same Region, connected by a redundant low-latency network; placing instances across them separates data centers while maintaining fast connectivity. A cluster placement group optimizes low latency by placing instances close together, not in separate data centers; different Regions and a VPN do not provide the same regional proximity."
    }
  },
  {
    "id": 81,
    "domain": "billing-pricing-support",
    "title": {
      "pt-BR": "Preços, custos e suporte",
      "en": "Pricing, costs and support"
    },
    "description": {
      "pt-BR": "Numa reserva de host dedicado EC2, qual pagamento fornece maior desconto?",
      "en": "For an EC2 Dedicated Host reservation, which payment option provides the greatest discount?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Sem pagamento antecipado",
          "en": "No upfront payment"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Na opção sem pagamento antecipado, não há custo inicial da reserva, mas as cobranças recorrentes são maiores do que na opção paga integralmente no início. Por isso, ela não oferece o maior desconto.",
          "en": "With the no-upfront option, there is no initial reservation payment, but recurring charges are higher than with the all-upfront option. It therefore does not provide the largest discount."
        }
      },
      {
        "title": {
          "pt-BR": "Sob demanda por hora",
          "en": "Hourly On-Demand payment"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Instâncias ou hosts sob demanda são cobrados pelo uso sem compromisso de reserva de longo prazo. Essa modalidade não é uma opção de pagamento antecipado de reserva e geralmente custa mais do que uma reserva com pagamento integral.",
          "en": "On-Demand instances or hosts are billed for usage without a long-term reservation commitment. This is not an upfront reservation payment option and generally costs more than an all-upfront reservation."
        }
      },
      {
        "title": {
          "pt-BR": "Pagamento antecipado parcial",
          "en": "Partial upfront payment"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O pagamento antecipado parcial combina uma entrada menor com cobranças ao longo do prazo da reserva. Seu desconto é menor que o da opção com pagamento antecipado total.",
          "en": "The partial-upfront option combines a smaller initial payment with charges over the reservation term. Its discount is smaller than the all-upfront option's discount."
        }
      },
      {
        "title": {
          "pt-BR": "Pagamento antecipado total",
          "en": "All upfront payment"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O pagamento antecipado total quita a reserva no início do prazo e, entre as opções de pagamento disponíveis, normalmente proporciona o maior desconto. A contrapartida é o maior desembolso inicial.",
          "en": "All-upfront payment pays for the reservation at the start of the term and generally provides the largest discount among the available payment options. The tradeoff is the largest initial outlay."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Uma reserva de Dedicated Host com pagamento antecipado total tem o maior desconto entre as opções de pagamento antecipado disponíveis, em troca do pagamento integral no início do prazo. Pagamentos parciais ou sem entrada oferecem descontos menores, e o preço sob demanda não é uma opção de pagamento de reserva.",
      "en": "An EC2 Dedicated Host reservation with all upfront payment provides the largest discount among the upfront payment options in exchange for paying the full amount at the start of the term. Partial or no-upfront payments provide smaller discounts, and On-Demand pricing is not a reservation payment option."
    }
  },
  {
    "id": 82,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Uma aplicação precisa enviar, armazenar e receber mensagens em ordem FIFO. Qual serviço usar?",
      "en": "An application needs to send, store, and receive messages in FIFO order. Which service should it use?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Step Functions",
          "en": "AWS Step Functions"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Step Functions coordena etapas de workflows distribuídos e gerencia transições e estados. Ele não é uma fila de mensagens para armazenamento e recebimento ordenado.",
          "en": "AWS Step Functions coordinates steps in distributed workflows and manages transitions and state. It is not a message queue for ordered storage and retrieval."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon SNS",
          "en": "Amazon SNS"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon SNS é um serviço de publicação e assinatura que distribui mensagens a vários assinantes. Embora ofereça tópicos FIFO, não é uma fila para consumidores obterem e processarem mensagens armazenadas como o Amazon SQS FIFO.",
          "en": "Amazon SNS is a publish-subscribe service that distributes messages to multiple subscribers. Although it offers FIFO topics, it is not a queue for consumers to retrieve and process stored messages like Amazon SQS FIFO."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Kinesis Data Streams",
          "en": "Amazon Kinesis Data Streams"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Kinesis Data Streams coleta e processa fluxos de registros em tempo real, preservando a ordem por shard. É adequado a streaming de dados, mas não é a fila de mensagens FIFO gerenciada solicitada.",
          "en": "Amazon Kinesis Data Streams collects and processes real-time record streams, preserving order per shard. It is suited to data streaming, but it is not the requested managed FIFO message queue."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon SQS",
          "en": "Amazon SQS"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Amazon SQS FIFO armazena mensagens em filas e preserva a ordem de envio e recebimento dentro de cada grupo de mensagens, com deduplicação. É indicado quando aplicações precisam de processamento de mensagens em sequência previsível.",
          "en": "Amazon SQS FIFO stores messages in queues and preserves send and receive order within each message group, with deduplication. It is suited to applications that need messages processed in a predictable sequence."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Amazon SQS FIFO é uma fila gerenciada que armazena mensagens e preserva a ordem dentro de cada grupo de mensagens, atendendo à necessidade de enviar, armazenar e receber em ordem. Step Functions orquestra workflows, SNS distribui mensagens para assinantes e Kinesis Data Streams processa fluxos de registros, não funciona como uma fila FIFO de mensagens.",
      "en": "Amazon SQS FIFO is a managed queue that stores messages and preserves order within each message group, meeting the need to send, store, and receive messages in order. Step Functions orchestrates workflows, SNS distributes messages to subscribers, and Kinesis Data Streams processes record streams rather than acting as an FIFO message queue."
    }
  },
  {
    "id": 83,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "AWS Well-Architected e resiliência",
      "en": "Well-Architected and resilience"
    },
    "description": {
      "pt-BR": "Quais afirmações sobre regiões e zonas de disponibilidade são verdadeiras? (Selecione duas.)",
      "en": "Which statements about Regions and Availability Zones are true? (Select two.)"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": true,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Regiões levam AWS para instalações locais",
          "en": "Regions bring AWS to on-premises locations"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Outposts estende serviços e infraestrutura da AWS a instalações locais; Regiões, por si só, são áreas geográficas da infraestrutura AWS na nuvem.",
          "en": "AWS Outposts extends AWS services and infrastructure to on-premises locations; Regions themselves are geographic areas of AWS cloud infrastructure."
        }
      },
      {
        "title": {
          "pt-BR": "Uma AZ contém várias regiões",
          "en": "An Availability Zone contains multiple Regions"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Uma Zona de Disponibilidade é composta por um ou mais datacenters, não por várias Regiões; várias AZs formam uma Região.",
          "en": "An Availability Zone consists of one or more data centers, not multiple Regions; multiple AZs make up a Region."
        }
      },
      {
        "title": {
          "pt-BR": "Regiões localizam-se pelo mundo",
          "en": "Regions are located around the world"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "As Regiões são áreas geográficas separadas distribuídas globalmente, permitindo escolher onde implantar recursos e atender requisitos de localização.",
          "en": "Regions are separate geographic areas distributed worldwide, allowing customers to choose where to deploy resources and meet location requirements."
        }
      },
      {
        "title": {
          "pt-BR": "Regiões estão sempre separadas por 100 km",
          "en": "Regions are always 100 km apart"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A AWS não define uma separação universal de 100 km entre todas as Regiões; a distância varia conforme a localização geográfica.",
          "en": "AWS does not define a universal 100 km separation between every Region; distances vary by geographic location."
        }
      },
      {
        "title": {
          "pt-BR": "Regiões consistem em várias AZs",
          "en": "Regions consist of multiple Availability Zones"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Uma Região contém várias Zonas de Disponibilidade independentes, o que permite distribuir recursos para aumentar a disponibilidade e a resiliência.",
          "en": "A Region contains multiple independent Availability Zones, allowing resources to be distributed for greater availability and resilience."
        }
      }
    ],
    "explanation": {
      "pt-BR": "As Regiões são áreas geográficas distintas distribuídas pelo mundo, e cada Região é composta por várias Zonas de Disponibilidade (AZs). Uma AZ não contém várias Regiões, e não há uma regra universal de distância fixa de 100 km entre Regiões; instalações locais são viabilizadas por ofertas como AWS Outposts e Local Zones.",
      "en": "AWS Regions are distinct geographic areas around the world, and each Region consists of multiple Availability Zones (AZs). An AZ does not contain multiple Regions, and there is no universal fixed 100 km separation rule between Regions; on-premises and nearby deployments are addressed by offerings such as AWS Outposts and Local Zones."
    }
  },
  {
    "id": 84,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Qual serviço monitora ações no console, SDKs e CLI da conta AWS?",
      "en": "Which service monitors actions in the AWS account console, SDKs, and CLI?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon Inspector",
          "en": "Amazon Inspector"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Inspector avalia continuamente vulnerabilidades e exposição de workloads compatíveis; ele não é o serviço principal para registrar ações da conta.",
          "en": "Amazon Inspector continuously assesses vulnerabilities and exposure for supported workloads; it is not the primary service for recording account actions."
        }
      },
      {
        "title": {
          "pt-BR": "AWS CloudTrail",
          "en": "AWS CloudTrail"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS CloudTrail registra eventos de gerenciamento e outras atividades da conta, permitindo auditar ações originadas no console, em SDKs e na CLI.",
          "en": "AWS CloudTrail records management events and other account activity, making it possible to audit actions originating in the console, SDKs, and the CLI."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Trusted Advisor",
          "en": "AWS Trusted Advisor"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Trusted Advisor oferece verificações e recomendações sobre custo, segurança, desempenho, tolerância a falhas e limites de serviço; não é um log de ações da conta.",
          "en": "AWS Trusted Advisor provides checks and recommendations for cost, security, performance, fault tolerance, and service limits; it is not an account activity log."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon CloudWatch",
          "en": "Amazon CloudWatch"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon CloudWatch coleta e monitora métricas, logs e alarmes operacionais, mas não é o serviço de auditoria das chamadas feitas pelos usuários na conta.",
          "en": "Amazon CloudWatch collects and monitors metrics, logs, and operational alarms, but it is not the service for auditing users' API actions in the account."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS CloudTrail registra a atividade da conta, incluindo ações realizadas no Console de Gerenciamento da AWS e chamadas feitas por SDKs e pela interface de linha de comando (CLI). Os outros serviços têm funções diferentes: monitoramento de métricas, recomendações ou avaliação de vulnerabilidades.",
      "en": "AWS CloudTrail records account activity, including actions in the AWS Management Console and calls made through software development kits (SDKs) and the command line interface (CLI). The other services serve different purposes, such as metrics monitoring, recommendations, or vulnerability assessment."
    }
  },
  {
    "id": 85,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "IAM e identidades",
      "en": "IAM and identities"
    },
    "description": {
      "pt-BR": "Qual serviço detecta interrupção nos servidores de site e redireciona usuários para endpoints alternativos?",
      "en": "Which service detects website server outages and redirects users to alternate endpoints?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon GuardDuty",
          "en": "Amazon GuardDuty"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon GuardDuty analisa fontes de telemetria para detectar ameaças à segurança; não realiza failover de DNS para o site.",
          "en": "Amazon GuardDuty analyzes telemetry sources to detect security threats; it does not perform DNS failover for a website."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Route 53",
          "en": "Amazon Route 53"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Amazon Route 53 é um serviço de DNS que pode usar verificações de integridade e políticas de roteamento para enviar usuários a endpoints saudáveis quando outro falha.",
          "en": "Amazon Route 53 is a DNS service that can use health checks and routing policies to send users to healthy endpoints when another endpoint fails."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Trusted Advisor",
          "en": "AWS Trusted Advisor"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Trusted Advisor verifica a configuração da conta e recomenda melhorias; ele não monitora endpoints de site nem redireciona consultas do Sistema de Nomes de Domínio (DNS).",
          "en": "AWS Trusted Advisor checks account configuration and recommends improvements; it does not monitor website endpoints or redirect Domain Name System (DNS) queries."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon CloudFront",
          "en": "Amazon CloudFront"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon CloudFront é uma rede de entrega de conteúdo que acelera a distribuição de conteúdo; não substitui o roteamento DNS de failover do Route 53.",
          "en": "Amazon CloudFront is a content delivery network that accelerates content delivery; it does not replace Route 53 failover DNS routing."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Amazon Route 53 pode verificar a integridade de endpoints com verificações de integridade e direcionar consultas do Sistema de Nomes de Domínio (DNS) para endpoints alternativos usando roteamento de failover. GuardDuty detecta ameaças, Trusted Advisor fornece recomendações e CloudFront distribui conteúdo, mas esses não são o serviço DNS de failover descrito.",
      "en": "Amazon Route 53 can check endpoint health and route Domain Name System (DNS) queries to alternate endpoints with failover routing. GuardDuty detects threats, Trusted Advisor provides recommendations, and CloudFront delivers content, but these are not the DNS failover service described."
    }
  },
  {
    "id": 86,
    "domain": "billing-pricing-support",
    "title": {
      "pt-BR": "Preços, custos e suporte",
      "en": "Pricing, costs and support"
    },
    "description": {
      "pt-BR": "Qual ferramenta ajuda a visualizar, entender e gerenciar gastos AWS ao longo do tempo?",
      "en": "Which tool helps visualize, understand, and manage AWS spending over time?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon CloudWatch",
          "en": "Amazon CloudWatch"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon CloudWatch monitora métricas, logs e alarmes de recursos e aplicações; a análise histórica e a visualização de custos são funções do Cost Explorer.",
          "en": "Amazon CloudWatch monitors resource and application metrics, logs, and alarms; historical cost analysis and visualization are provided by Cost Explorer."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Budgets",
          "en": "AWS Budgets"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Budgets define orçamentos e pode enviar alertas quando custos, uso ou reservas atingem limites; não é a ferramenta principal de análise visual de gastos ao longo do tempo.",
          "en": "AWS Budgets sets budgets and can send alerts when costs, usage, or reservations reach thresholds; it is not the primary tool for visual analysis of spending over time."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Trusted Advisor",
          "en": "AWS Trusted Advisor"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Trusted Advisor apresenta verificações e recomendações de otimização, incluindo oportunidades relacionadas a custos, mas não oferece a análise temporal de gastos do Cost Explorer.",
          "en": "AWS Trusted Advisor provides checks and optimization recommendations, including cost-related opportunities, but not Cost Explorer's time-based spending analysis."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Cost Explorer",
          "en": "AWS Cost Explorer"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Cost Explorer permite explorar custos e uso com filtros, gráficos e previsões, apoiando a identificação de tendências e o gerenciamento dos gastos.",
          "en": "AWS Cost Explorer lets users explore costs and usage with filters, charts, and forecasts, helping identify trends and manage spending."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Cost Explorer fornece visualizações e análises dos custos e do uso da AWS ao longo do tempo, inclusive previsões, para ajudar a entender e gerenciar gastos. Budgets define limites e alertas, Trusted Advisor oferece verificações e CloudWatch monitora métricas operacionais.",
      "en": "AWS Cost Explorer provides visualizations and analysis of AWS costs and usage over time, including forecasts, to help users understand and manage spending. Budgets sets thresholds and alerts, Trusted Advisor provides checks, and CloudWatch monitors operational metrics."
    }
  },
  {
    "id": 87,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Proteção e segurança",
      "en": "Protection and security"
    },
    "description": {
      "pt-BR": "Uma aplicação recebe ataques SQL injection. Qual serviço ajuda a mitigá-los automaticamente?",
      "en": "An application receives SQL injection attacks. Which service helps mitigate them automatically?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS WAF",
          "en": "AWS WAF"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS WAF protege aplicações web ao inspecionar solicitações e aplicar regras, incluindo regras para bloquear padrões de injeção de Linguagem de Consulta Estruturada (SQL).",
          "en": "AWS WAF protects web applications by inspecting requests and applying rules, including rules that block Structured Query Language (SQL) injection patterns."
        }
      },
      {
        "title": {
          "pt-BR": "Elastic Load Balancing",
          "en": "Elastic Load Balancing"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Elastic Load Balancing distribui conexões ou solicitações entre destinos, como instâncias EC2; não inspeciona o conteúdo da aplicação para bloquear injeção SQL.",
          "en": "Elastic Load Balancing distributes connections or requests among targets such as Amazon Elastic Compute Cloud (EC2) instances; it does not inspect application content to block SQL injection."
        }
      },
      {
        "title": {
          "pt-BR": "Security Groups",
          "en": "Security Groups"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Os grupos de segurança controlam tráfego de entrada e saída associado a recursos, usando regras de rede; eles não analisam o conteúdo HTTP para identificar injeção SQL.",
          "en": "Security groups control inbound and outbound traffic associated with resources using network rules; they do not analyze HTTP content to identify SQL injection."
        }
      },
      {
        "title": {
          "pt-BR": "Network ACL",
          "en": "Network ACL"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "As Network ACLs filtram tráfego de entrada e saída no nível da sub-rede por regras de rede, mas não inspecionam solicitações web em busca de padrões de injeção de Linguagem de Consulta Estruturada (SQL).",
          "en": "Network ACLs filter inbound and outbound traffic at the subnet level using network rules, but do not inspect web requests for Structured Query Language (SQL) injection patterns."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS WAF inspeciona solicitações solicitações web e permite configurar regras gerenciadas ou personalizadas para detectar e bloquear padrões de injeção de Linguagem de Consulta Estruturada (SQL). Grupos de segurança e Network ACLs filtram tráfego de rede principalmente por endereço, protocolo e porta, enquanto o Elastic Load Balancing distribui tráfego entre destinos.",
      "en": "AWS WAF inspects web requests requests and lets users configure managed or custom rules to detect and block Structured Query Language (SQL) injection patterns. Security groups and network ACLs filter network traffic mainly by address, protocol, and port, while Elastic Load Balancing distributes traffic among targets."
    }
  },
  {
    "id": 88,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Uma empresa quer automatizar a criação do ambiente e a implantação de versões de aplicativo web Java. Qual serviço?",
      "en": "A company wants to automate environment creation and deployment of Java web application versions. Which service should it use?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Control Tower",
          "en": "AWS Control Tower"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Control Tower configura e governa um ambiente AWS multi-conta seguindo práticas recomendadas; não é a plataforma de implantação de versões da aplicação Java.",
          "en": "AWS Control Tower sets up and governs a multi-account AWS environment using best practices; it is not the platform for deploying Java application versions."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon EC2",
          "en": "Amazon EC2"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon EC2 fornece servidores virtuais para executar aplicações, mas exige que a empresa gerencie a configuração do ambiente e o processo de implantação.",
          "en": "Amazon EC2 provides virtual servers for running applications, but the company must manage environment configuration and the deployment process."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Elastic Beanstalk",
          "en": "AWS Elastic Beanstalk"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Elastic Beanstalk recebe o código da aplicação e automatiza o provisionamento do ambiente, a implantação e aspectos operacionais para plataformas como Java.",
          "en": "AWS Elastic Beanstalk takes application code and automates environment provisioning, deployment, and operational tasks for platforms such as Java."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Auto Scaling",
          "en": "AWS Auto Scaling"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Auto Scaling adiciona ou remove capacidade conforme políticas e métricas, mas não é um serviço de implantação e gerenciamento de versões de aplicações web.",
          "en": "AWS Auto Scaling adds or removes capacity according to policies and metrics, but it is not a service for deploying and managing web application versions."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Elastic Beanstalk simplifica a implantação e o gerenciamento de aplicações web, incluindo aplicações Java, provisionando os recursos necessários para o ambiente. EC2 fornece capacidade computacional, Auto Scaling ajusta a capacidade e Control Tower governa ambientes multi-conta, mas não automatizam sozinhos esse fluxo de implantação da aplicação.",
      "en": "AWS Elastic Beanstalk simplifies deployment and management of web applications, including Java applications, by provisioning the resources needed for the environment. EC2 provides compute capacity, Auto Scaling adjusts capacity, and Control Tower governs multi-account environments, but they do not by themselves automate this application deployment workflow."
    }
  },
  {
    "id": 89,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Armazenamento AWS",
      "en": "AWS storage"
    },
    "description": {
      "pt-BR": "Qual serviço AWS fornece cache e armazenamento em memória?",
      "en": "Which AWS service provides in-memory caching and storage?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon DynamoDB",
          "en": "Amazon DynamoDB"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon DynamoDB é um banco de dados NoSQL gerenciado de chave-valor e documentos; não é o serviço dedicado de cache em memória desta opção.",
          "en": "Amazon DynamoDB is a managed NoSQL key-value and document database; it is not the dedicated in-memory caching service in this choice."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Timestream",
          "en": "Amazon Timestream"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Timestream é um banco de dados de séries temporais para dados que mudam ao longo do tempo; não fornece a função de cache em memória do ElastiCache.",
          "en": "Amazon Timestream is a time-series database for data that changes over time; it does not provide ElastiCache's in-memory caching role."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon RDS",
          "en": "Amazon RDS"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon RDS facilita a configuração, operação e escalabilidade de bancos de dados relacionais; não é um serviço de cache em memória.",
          "en": "Amazon RDS makes it easier to set up, operate, and scale relational databases; it is not an in-memory caching service."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon ElastiCache",
          "en": "Amazon ElastiCache"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Amazon ElastiCache fornece caches e armazenamentos de dados em memória gerenciados, reduzindo a latência de acesso a dados usados com frequência.",
          "en": "Amazon ElastiCache provides managed in-memory caches and data stores, reducing access latency for frequently used data."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Amazon ElastiCache oferece armazenamentos de dados em memória gerenciados, como caches compatíveis com Redis OSS e Memcached, para acesso de baixa latência. DynamoDB, Timestream e RDS são serviços de banco de dados com finalidades diferentes, não a oferta AWS específica de cache em memória desta lista.",
      "en": "Amazon ElastiCache provides managed in-memory data stores, including caches compatible with Redis OSS and Memcached, for low-latency access. DynamoDB, Timestream, and RDS are database services with different purposes, not the AWS-specific in-memory caching offering in this list."
    }
  },
  {
    "id": 90,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "IAM e identidades",
      "en": "IAM and identities"
    },
    "description": {
      "pt-BR": "Qual prática é recomendada para usuário root AWS?",
      "en": "Which practice is recommended for the AWS root user?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Não alternar senha",
          "en": "Do not rotate the password"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Manter uma senha sem controles fortes não protege a conta; a senha do root deve ser protegida e a MFA deve ser habilitada como uma camada adicional.",
          "en": "Keeping a password without strong safeguards does not protect the account; the root password should be secured and MFA enabled as an additional layer."
        }
      },
      {
        "title": {
          "pt-BR": "Compartilhar senha com operações",
          "en": "Share the password with the operations team"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Compartilhar a senha do root amplia o número de pessoas com acesso irrestrito e prejudica a responsabilização; cada pessoa deve usar sua própria identidade e permissões apropriadas.",
          "en": "Sharing the root password gives more people unrestricted access and weakens accountability; each person should use their own identity with appropriate permissions."
        }
      },
      {
        "title": {
          "pt-BR": "Ativar autenticação multifator (MFA)",
          "en": "Enable multi-factor authentication (MFA)"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Habilitar MFA adiciona um segundo fator de autenticação e reduz o risco de acesso indevido mesmo se a senha for comprometida.",
          "en": "Enabling MFA adds a second authentication factor and reduces the risk of unauthorized access even if the password is compromised."
        }
      },
      {
        "title": {
          "pt-BR": "Criar chave de acesso root",
          "en": "Create a root access key"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A AWS recomenda não criar chaves de acesso para o usuário root; tarefas programáticas devem usar credenciais temporárias e identidades com privilégios mínimos.",
          "en": "AWS recommends not creating access keys for the root user; programmatic tasks should use temporary credentials and least-privilege identities."
        }
      }
    ],
    "explanation": {
      "pt-BR": "A prática recomendada é proteger o usuário root com autenticação multifator (MFA), além de evitar seu uso cotidiano e não criar chaves de acesso para ele. Compartilhar a senha ou deixá-la sem controles adequados aumenta o risco de comprometimento da conta.",
      "en": "The recommended practice is to protect the root user with multi-factor authentication (MFA), while avoiding routine use and not creating access keys for it. Sharing its password or leaving it without appropriate safeguards increases the risk of account compromise."
    }
  },
  {
    "id": 91,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Proteção e segurança",
      "en": "Protection and security"
    },
    "description": {
      "pt-BR": "Uma empresa deseja verificar continuamente instâncias EC2 em busca de vulnerabilidades de software. Qual serviço?",
      "en": "A company wants to continuously scan EC2 instances for software vulnerabilities. Which service should it use?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon Detective",
          "en": "Amazon Detective"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Detective analisa dados de segurança para ajudar a investigar e visualizar possíveis causas de descobertas; não é o scanner de vulnerabilidades de software para EC2.",
          "en": "Amazon Detective analyzes security data to help investigate and visualize possible causes of findings; it is not the software vulnerability scanner for EC2."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Inspector",
          "en": "Amazon Inspector"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Amazon Inspector verifica continuamente workloads compatíveis, incluindo instâncias EC2, em busca de vulnerabilidades de software e exposição de rede.",
          "en": "Amazon Inspector continuously scans supported workloads, including Amazon Elastic Compute Cloud (EC2) instances, for software vulnerabilities and network exposure."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Cognito",
          "en": "Amazon Cognito"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Cognito fornece recursos de autenticação, autorização e gerenciamento de usuários para aplicações; não analisa pacotes de software em instâncias EC2.",
          "en": "Amazon Cognito provides authentication, authorization, and user management capabilities for applications; it does not assess software packages on Amazon Elastic Compute Cloud (EC2) instances."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon GuardDuty",
          "en": "Amazon GuardDuty"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon GuardDuty detecta atividades potencialmente maliciosas usando fontes de dados e inteligência de ameaças; a verificação de vulnerabilidades de software é função do Inspector.",
          "en": "Amazon GuardDuty detects potentially malicious activity using data sources and threat intelligence; software vulnerability scanning is Inspector's role."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Amazon Inspector descobre e avalia vulnerabilidades de software e exposição de rede em instâncias do Amazon Elastic Compute Cloud (EC2) compatíveis, com verificações contínuas. Detective ajuda a investigar descobertas de segurança, Cognito gerencia identidade de usuários de aplicações e GuardDuty detecta ameaças, mas nenhum deles substitui a avaliação de vulnerabilidades do Inspector.",
      "en": "Amazon Inspector discovers and assesses software vulnerabilities and network exposure for supported Amazon Elastic Compute Cloud (EC2) instances, with continuous scanning. Detective helps investigate security findings, Cognito manages application user identity, and GuardDuty detects threats, but none replaces Inspector's vulnerability assessment."
    }
  },
  {
    "id": 92,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Proteção e segurança",
      "en": "Protection and security"
    },
    "description": {
      "pt-BR": "Uma empresa precisa bloquear ataques de injeção SQL. Qual recurso?",
      "en": "A company needs to block SQL injection attacks. Which feature should it use?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Security Groups",
          "en": "Security Groups"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Os grupos de segurança controlam o tráfego de rede permitido para recursos, mas não inspecionam o conteúdo das solicitações web para bloquear injeção SQL.",
          "en": "Security groups control network traffic allowed to resources, but do not inspect web request content to block SQL injection."
        }
      },
      {
        "title": {
          "pt-BR": "AWS WAF",
          "en": "AWS WAF"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS WAF inspeciona solicitações web e aplica regras, inclusive regras gerenciadas para identificar e bloquear padrões de injeção de Linguagem de Consulta Estruturada (SQL).",
          "en": "AWS WAF inspects web requests and applies rules, including managed rules to identify and block Structured Query Language (SQL) injection patterns."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Shield",
          "en": "AWS Shield"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Shield oferece proteção gerenciada contra ataques DDoS; não é o serviço de filtragem de conteúdo de solicitações web para injeção SQL.",
          "en": "AWS Shield provides managed protection against DDoS attacks; it is not the service for filtering web request content for SQL injection."
        }
      },
      {
        "title": {
          "pt-BR": "Network ACLs",
          "en": "Network ACLs"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "As Network ACLs aplicam regras de tráfego no nível da sub-rede, sem analisar o conteúdo da aplicação necessário para identificar injeção SQL.",
          "en": "Network ACLs apply traffic rules at the subnet level without analyzing the application content needed to identify SQL injection."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS WAF permite associar regras de inspeção a recursos web e bloquear solicitações que correspondam a padrões de injeção de Linguagem de Consulta Estruturada (SQL). Grupos de segurança e Network ACLs filtram tráfego de rede, enquanto AWS Shield é voltado à proteção contra ataques de negação de serviço distribuída (DDoS).",
      "en": "AWS WAF lets users attach inspection rules to web resources and block requests that match Structured Query Language (SQL) injection patterns. Security groups and network ACLs filter network traffic, while AWS Shield is designed to protect against distributed denial-of-service (DDoS) attacks."
    }
  },
  {
    "id": 93,
    "domain": "billing-pricing-support",
    "title": {
      "pt-BR": "Preços, custos e suporte",
      "en": "Pricing, costs and support"
    },
    "description": {
      "pt-BR": "Uma empresa deseja notificação quando atingir limite de custo específico. Quais ferramentas? (Duas.)",
      "en": "A company wants a notification when a specific cost threshold is reached. Which tools can be used? (Select two.)"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": true,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Cost and Usage Report",
          "en": "AWS Cost and Usage Report"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Cost and Usage Report fornece dados detalhados de custo e uso para análise e exportação; sozinho, não é uma ferramenta de notificação imediata ao atingir um limite.",
          "en": "AWS Cost and Usage Report provides detailed cost and usage data for analysis and export; by itself, it is not an immediate notification tool for a reached threshold."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon SQS",
          "en": "Amazon SQS"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Simple Queue Service (SQS) é um serviço de filas que desacopla componentes de aplicações por meio de mensagens; não monitora custos nem define alertas de cobrança.",
          "en": "Amazon Simple Queue Service (SQS) is a queue service that decouples application components through messages; it does not monitor costs or set billing alerts."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Budgets",
          "en": "AWS Budgets"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Budgets permite definir limites de custo e configurar notificações quando custos reais ou previstos se aproximam ou ultrapassam esses limites.",
          "en": "AWS Budgets lets users set cost thresholds and configure notifications when actual or forecasted costs approach or exceed them."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon CloudWatch",
          "en": "Amazon CloudWatch"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Amazon CloudWatch pode gerar alarmes a partir de métricas de cobrança, como cobranças estimadas, e enviar notificações quando o limite configurado for atingido.",
          "en": "Amazon CloudWatch can create alarms from billing metrics, such as estimated charges, and send notifications when a configured threshold is reached."
        }
      },
      {
        "title": {
          "pt-BR": "Cost Explorer",
          "en": "Cost Explorer"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Cost Explorer permite analisar e visualizar custos e uso, mas alertas ao atingir limites são configurados com AWS Budgets ou alarmes de cobrança do CloudWatch.",
          "en": "AWS Cost Explorer lets users analyze and visualize costs and usage, but threshold alerts are configured with AWS Budgets or CloudWatch billing alarms."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Budgets pode alertar quando custos previstos ou reais atingem limites definidos, e alarmes do Amazon CloudWatch também podem notificar com base em métricas de cobrança, após a ativação dos dados de cobrança correspondentes. O Cost and Usage Report fornece dados detalhados de cobrança, e o Cost Explorer analisa custos, mas não são as ferramentas de alerta por limite indicadas; o SQS é uma fila de mensagens.",
      "en": "AWS Budgets can alert when forecasted or actual costs reach defined thresholds, and Amazon CloudWatch alarms can also notify based on billing metrics after the relevant billing data is enabled. The Cost and Usage Report provides detailed billing data, and Cost Explorer analyzes costs, but they are not the threshold alert tools indicated; SQS is a message queue."
    }
  },
  {
    "id": 94,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Rede e infraestrutura global",
      "en": "Networking and global infrastructure"
    },
    "description": {
      "pt-BR": "Qual recurso registra tráfego de entrada e saída de interfaces de rede em VPC?",
      "en": "Which feature records inbound and outbound traffic for network interfaces in a VPC?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon CloudWatch Logs",
          "en": "Amazon CloudWatch Logs"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon CloudWatch Logs armazena e permite consultar logs enviados por serviços e aplicações; o registro de metadados do tráfego de rede da VPC é feito por VPC Flow Logs.",
          "en": "Amazon CloudWatch Logs stores and lets users query logs sent by services and applications; VPC Flow Logs capture VPC network traffic metadata."
        }
      },
      {
        "title": {
          "pt-BR": "AWS CloudTrail",
          "en": "AWS CloudTrail"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS CloudTrail registra eventos e ações da conta, como chamadas de API; não registra fluxos de pacotes de entrada e saída das interfaces da VPC.",
          "en": "AWS CloudTrail records account events and actions such as API calls; it does not record packet flows to and from VPC interfaces."
        }
      },
      {
        "title": {
          "pt-BR": "VPC Flow Logs",
          "en": "VPC Flow Logs"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Os VPC Flow Logs capturam metadados sobre fluxos de tráfego IP associados a interfaces de rede, sub-redes ou VPCs, incluindo tráfego permitido e rejeitado.",
          "en": "VPC Flow Logs capture metadata about IP traffic flows associated with network interfaces, subnets, or VPCs, including allowed and rejected traffic."
        }
      },
      {
        "title": {
          "pt-BR": "IAM",
          "en": "IAM"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Identity and Access Management (IAM) gerencia identidades e permissões para acesso a recursos; não registra tráfego de rede da VPC.",
          "en": "AWS Identity and Access Management (IAM) manages identities and permissions for resource access; it does not record VPC network traffic."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Os VPC Flow Logs registram informações sobre o tráfego IP que entra e sai de interfaces de rede, sub-redes ou nuvens privadas virtuais (VPCs), incluindo tráfego aceito e rejeitado conforme a configuração. CloudWatch Logs armazena e consulta logs, CloudTrail registra atividade da conta e IAM controla acesso; nenhum deles é o recurso específico de captura de fluxo de tráfego da VPC.",
      "en": "VPC Flow Logs capture information about IP traffic going to and from network interfaces, subnets, or virtual private clouds (VPCs), including accepted and rejected traffic according to the configuration. CloudWatch Logs stores and queries logs, CloudTrail records account activity, and IAM controls access; none is the VPC-specific traffic flow capture feature."
    }
  },
  {
    "id": 95,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Armazenamento AWS",
      "en": "AWS storage"
    },
    "description": {
      "pt-BR": "Como proteger objetos S3 contra exclusão e substituição acidental?",
      "en": "How can S3 objects be protected against accidental deletion or overwriting?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Regras de ciclo de vida",
          "en": "Lifecycle rules"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Regras de ciclo de vida automatizam ações em objetos, como transição para outras classes de armazenamento ou expiração; não mantêm versões recuperáveis por si só.",
          "en": "Lifecycle rules automate actions on objects, such as transitions to other storage classes or expiration; they do not by themselves keep recoverable versions."
        }
      },
      {
        "title": {
          "pt-BR": "Versionamento",
          "en": "Versioning"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Com o versionamento habilitado, o S3 preserva versões anteriores e usa marcadores de exclusão, permitindo recuperar objetos substituídos ou removidos acidentalmente.",
          "en": "With versioning enabled, S3 preserves previous versions and uses delete markers, allowing accidentally overwritten or removed objects to be recovered."
        }
      },
      {
        "title": {
          "pt-BR": "Políticas de bucket",
          "en": "Bucket policies"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Políticas de bucket definem permissões de acesso ao bucket e aos objetos; elas não mantêm cópias anteriores de objetos substituídos.",
          "en": "Bucket policies define access permissions for a bucket and its objects; they do not keep prior copies of overwritten objects."
        }
      },
      {
        "title": {
          "pt-BR": "Criptografia do lado do servidor",
          "en": "Server-side encryption"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A criptografia do lado do servidor protege os dados em repouso, mas não impede a substituição nem fornece recuperação de versões anteriores.",
          "en": "Server-side encryption protects data at rest, but does not prevent overwriting or provide recovery of previous versions."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O versionamento do Amazon S3 mantém versões distintas de um objeto no mesmo bucket, permitindo recuperar uma versão anterior após substituição ou exclusão acidental. Regras de ciclo de vida automatizam transições e expirações, políticas controlam permissões e criptografia protege a confidencialidade, mas esses recursos não oferecem por si só o histórico de versões.",
      "en": "Amazon Simple Storage Service (S3) versioning keeps distinct versions of an object in the same bucket, allowing an earlier version to be recovered after accidental overwriting or deletion. Lifecycle rules automate transitions and expiration, policies control permissions, and encryption protects confidentiality, but those features do not by themselves provide version history."
    }
  },
  {
    "id": 96,
    "domain": "billing-pricing-support",
    "title": {
      "pt-BR": "Preços, custos e suporte",
      "en": "Pricing, costs and support"
    },
    "description": {
      "pt-BR": "Qual opção de preço atende ao compromisso de uso contínuo de EC2 com menor custo? (Duas.)",
      "en": "Which pricing options suit continuous EC2 usage at a lower cost? (Select two.)"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": true,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Dedicated Hosts",
          "en": "Dedicated Hosts"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Dedicated Hosts fornecem servidores físicos dedicados para atender requisitos de licenciamento, conformidade ou isolamento; não são a escolha geral de menor preço para uso contínuo comprometido.",
          "en": "Dedicated Hosts provide dedicated physical servers for licensing, compliance, or isolation requirements; they are not the general lower-price choice for committed continuous usage."
        }
      },
      {
        "title": {
          "pt-BR": "Reserved Instances",
          "en": "Reserved Instances"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Instâncias Reservadas oferecem desconto em relação ao preço On-Demand em troca de compromisso de uso por um prazo, adequando-se a necessidades previsíveis do Amazon Elastic Compute Cloud (EC2).",
          "en": "Reserved Instances offer a discount compared with On-Demand pricing in exchange for a term commitment, suiting predictable Amazon Elastic Compute Cloud (EC2) needs."
        }
      },
      {
        "title": {
          "pt-BR": "Savings Plans",
          "en": "Savings Plans"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Savings Plans reduzem preços em troca de compromisso com um valor de uso por hora durante um prazo, podendo se aplicar a uso elegível de EC2.",
          "en": "Savings Plans reduce prices in exchange for a commitment to a consistent amount of usage per hour over a term and can apply to eligible EC2 usage."
        }
      },
      {
        "title": {
          "pt-BR": "Spot Instances",
          "en": "Spot Instances"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Instâncias Spot usam capacidade EC2 excedente com desconto, mas podem ser interrompidas pela AWS e, por isso, não são ideais para uma carga contínua que exige disponibilidade previsível.",
          "en": "Spot Instances use discounted spare EC2 capacity, but AWS can interrupt them, so they are not ideal for continuous workloads requiring predictable availability."
        }
      },
      {
        "title": {
          "pt-BR": "On-Demand",
          "en": "On-Demand"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "On-Demand cobra pelo uso sem compromisso de longo prazo; sua flexibilidade não oferece o desconto por compromisso de uso contínuo das opções corretas.",
          "en": "On-Demand charges for usage without a long-term commitment; its flexibility does not provide the committed-use discount of the correct options."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Instâncias Reservadas e Savings Plans oferecem preços reduzidos em troca de um compromisso de uso por prazo definido, sendo apropriados para workloads contínuos e previsíveis. Spot pode ser interrompido quando a AWS precisa recuperar capacidade, On-Demand não exige compromisso e Dedicated Hosts atendem a requisitos de servidor físico dedicado, não são a opção geral de desconto por uso contínuo.",
      "en": "Reserved Instances and Savings Plans offer reduced pricing in exchange for a commitment over a defined term, making them suitable for continuous, predictable workloads. Spot can be interrupted when AWS needs the capacity, On-Demand requires no commitment, and Dedicated Hosts address dedicated physical server requirements rather than being the general discount option for continuous usage."
    }
  },
  {
    "id": 97,
    "domain": "billing-pricing-support",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Qual plataforma gratuita permite interagir com a comunidade AWS e encontrar respostas e artigos?",
      "en": "Which free platform lets users interact with the AWS community and find answers and articles?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS re:Post",
          "en": "AWS re:Post"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS re:Post permite fazer perguntas, compartilhar conhecimento e interagir com a comunidade AWS, além de pesquisar artigos e respostas.",
          "en": "AWS re:Post lets users ask questions, share knowledge, and interact with the AWS community, as well as search articles and answers."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Enterprise Support",
          "en": "AWS Enterprise Support"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Enterprise Support é um plano de suporte pago com orientação e assistência técnica; não é a plataforma gratuita de interação comunitária.",
          "en": "AWS Enterprise Support is a paid support plan with guidance and technical assistance; it is not the free community interaction platform."
        }
      },
      {
        "title": {
          "pt-BR": "AWS IQ",
          "en": "AWS IQ"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS IQ ajuda clientes a encontrar especialistas AWS para projetos e serviços profissionais, em vez de funcionar como fórum comunitário gratuito.",
          "en": "AWS IQ helps customers find AWS experts for projects and professional services rather than serving as a free community forum."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Knowledge Center",
          "en": "AWS Knowledge Center"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Knowledge Center oferece artigos com respostas e orientações para problemas comuns, mas não é principalmente um espaço de interação entre membros da comunidade.",
          "en": "AWS Knowledge Center provides articles with answers and guidance for common issues, but it is not primarily a place for community members to interact."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS re:Post é uma plataforma gratuita de perguntas e respostas e compartilhamento de conhecimento na qual usuários podem interagir com a comunidade AWS e consultar artigos. Enterprise Support é um plano pago de suporte, AWS IQ conecta clientes a especialistas para trabalho profissional e Knowledge Center reúne artigos de suporte sem ser a plataforma comunitária descrita.",
      "en": "AWS re:Post is a free question-and-answer and knowledge-sharing platform where users can interact with the AWS community and find articles. Enterprise Support is a paid support plan, AWS IQ connects customers with experts for professional work, and Knowledge Center provides support articles but is not the community platform described."
    }
  },
  {
    "id": 98,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Quais características correspondem às Network ACLs? (Duas.)",
      "en": "Which characteristics apply to Network ACLs? (Select two.)"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": true,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Avaliam todas as regras antes de permitir tráfego",
          "en": "Evaluate all rules before allowing traffic"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "As regras da Network ACL são avaliadas em ordem numérica crescente; o processamento para na primeira regra que corresponde ao tráfego.",
          "en": "Network ACL rules are evaluated in ascending numerical order; processing stops at the first rule that matches the traffic."
        }
      },
      {
        "title": {
          "pt-BR": "Processam regras em ordem numérica crescente",
          "en": "Process rules in ascending numerical order"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "A avaliação das regras não continua por todas elas antes de permitir tráfego: a primeira regra correspondente define se o tráfego será permitido ou negado.",
          "en": "The rules are not all evaluated before traffic is allowed: the first matching rule determines whether traffic is allowed or denied."
        }
      },
      {
        "title": {
          "pt-BR": "Operam no nível da instância",
          "en": "Operate at the instance level"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Network ACLs se aplicam a sub-redes; o controle associado diretamente às interfaces de rede das instâncias é feito por grupos de segurança.",
          "en": "Network ACLs apply to subnets; security groups provide the controls associated directly with instances' network interfaces."
        }
      },
      {
        "title": {
          "pt-BR": "São stateless",
          "en": "Are stateless"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Network ACLs são stateless, então regras de entrada e saída são avaliadas independentemente e o tráfego de resposta precisa ser permitido explicitamente.",
          "en": "Network ACLs are stateless, so inbound and outbound rules are evaluated independently and response traffic must be explicitly allowed."
        }
      },
      {
        "title": {
          "pt-BR": "São stateful",
          "en": "Are stateful"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Network ACLs não são stateful; esse comportamento caracteriza grupos de segurança, que acompanham conexões permitidas.",
          "en": "Network ACLs are not stateful; that behavior characterizes security groups, which track allowed connections."
        }
      }
    ],
    "explanation": {
      "pt-BR": "As Network ACLs são stateless e aplicadas no nível da sub-rede; suas regras são avaliadas em ordem numérica crescente, e a primeira regra correspondente determina a ação. Elas não avaliam todas as regras, não operam no nível da instância e, ao contrário dos grupos de segurança, não mantêm estado da conexão.",
      "en": "Network ACLs are stateless and applied at the subnet level; their rules are evaluated in ascending numerical order, and the first matching rule determines the action. They do not evaluate every rule, do not operate at the instance level, and, unlike security groups, do not track connection state."
    }
  },
  {
    "id": 99,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Onde adquirir software de terceiros para cargas de trabalho AWS?",
      "en": "Where can third-party software for AWS workloads be purchased?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS License Manager",
          "en": "AWS License Manager"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS License Manager ajuda a gerenciar e controlar o uso de licenças de software; não é o catálogo para adquirir software de terceiros.",
          "en": "AWS License Manager helps manage and control software license usage; it is not the catalog for purchasing third-party software."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Marketplace",
          "en": "AWS Marketplace"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Marketplace oferece software e serviços de terceiros que podem ser descobertos e adquiridos para uso com workloads AWS.",
          "en": "AWS Marketplace offers third-party software and services that can be discovered and purchased for use with AWS workloads."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Resource Access Manager",
          "en": "AWS Resource Access Manager"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Resource Access Manager compartilha recursos AWS específicos entre contas e organizações; não comercializa software de terceiros.",
          "en": "AWS Resource Access Manager shares specific AWS resources across accounts and organizations; it does not sell third-party software."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Managed Services",
          "en": "AWS Managed Services"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Managed Services fornece operação e gerenciamento de ambientes AWS conforme um modelo de serviço gerenciado; não é uma loja de software.",
          "en": "AWS Managed Services operates and manages AWS environments under a managed service model; it is not a software store."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Marketplace é um catálogo digital para descobrir, comprar, implantar e gerenciar software e serviços de terceiros para workloads AWS. License Manager acompanha licenças, Resource Access Manager compartilha recursos entre contas e AWS Managed Services oferece operações gerenciadas, não um mercado de software.",
      "en": "AWS Marketplace is a digital catalog for discovering, buying, deploying, and managing third-party software and services for AWS workloads. License Manager tracks licenses, Resource Access Manager shares resources across accounts, and AWS Managed Services provides managed operations rather than a software marketplace."
    }
  },
  {
    "id": 100,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "AWS Cloud Adoption Framework",
      "en": "AWS Cloud Adoption Framework"
    },
    "description": {
      "pt-BR": "Qual perspectiva AWS CAF garante que serviços em nuvem atendam a metas de desempenho e requisitos do negócio?",
      "en": "Which AWS CAF perspective ensures that cloud services meet performance goals and business requirements?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Plataforma",
          "en": "Platform"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A perspectiva Plataforma orienta a arquitetura e a implementação de plataformas tecnológicas em nuvem; a operação contínua e o suporte aos níveis de serviço pertencem à perspectiva Operações.",
          "en": "The Platform perspective guides the architecture and implementation of cloud technology platforms; ongoing operations and service-level support belong to the Operations perspective."
        }
      },
      {
        "title": {
          "pt-BR": "Governança",
          "en": "Governance"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A perspectiva Governança ajuda a dirigir e controlar a adoção da nuvem, incluindo risco, conformidade e gestão de portfólio; não é a perspectiva responsável pela operação cotidiana dos workloads.",
          "en": "The Governance perspective helps direct and control cloud adoption, including risk, compliance, and portfolio management; it is not the perspective responsible for day-to-day workload operations."
        }
      },
      {
        "title": {
          "pt-BR": "Operações",
          "en": "Operations"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "A perspectiva Operações abrange monitoramento, suporte e gerenciamento dos workloads para manter o desempenho e cumprir os requisitos e níveis de serviço do negócio.",
          "en": "The Operations perspective covers monitoring, support, and workload management to maintain performance and meet business requirements and service levels."
        }
      },
      {
        "title": {
          "pt-BR": "Negócio",
          "en": "Business"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A perspectiva Negócio alinha a adoção da nuvem aos resultados e ao valor empresarial; a responsabilidade por executar e dar suporte aos serviços em produção é tratada por Operações.",
          "en": "The Business perspective aligns cloud adoption with business outcomes and value; responsibility for running and supporting services in production is addressed by Operations."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Na AWS Cloud Adoption Framework (CAF), a perspectiva Operações concentra-se em operar, monitorar e dar suporte a workloads para que atendam aos níveis de serviço e às necessidades do negócio. Negócio trata dos resultados de negócio, Plataforma aborda a arquitetura e os serviços de nuvem, e Governança orienta controle, risco e conformidade.",
      "en": "In the AWS Cloud Adoption Framework (CAF), the Operations perspective focuses on operating, monitoring, and supporting workloads so they meet service levels and business needs. Business addresses business outcomes, Platform covers cloud architecture and services, and Governance guides control, risk, and compliance."
    }
  },
  {
    "id": 101,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Rede e infraestrutura global",
      "en": "Networking and global infrastructure"
    },
    "description": {
      "pt-BR": "Aplicação em EC2 precisa acessar serviços AWS sem credenciais estáticas. Qual opção indicada?",
      "en": "An application on EC2 needs to access AWS services without static credentials. Which option is recommended?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Chaves hardcoded",
          "en": "Hard-coded keys"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Chaves de acesso gravadas diretamente no código podem vazar e exigem rotação manual; elas não oferecem a obtenção automática e temporária de credenciais de uma função IAM.",
          "en": "Access keys embedded directly in code can be exposed and require manual rotation; they do not provide the automatic, temporary credentials of an IAM role."
        }
      },
      {
        "title": {
          "pt-BR": "IAM Role via Instance Profile",
          "en": "IAM role through an instance profile"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Uma função IAM associada à instância por um perfil de instância fornece credenciais temporárias renovadas automaticamente, que a aplicação usa para acessar serviços AWS conforme as permissões concedidas.",
          "en": "An IAM role attached to the instance through an instance profile provides automatically refreshed temporary credentials that the application uses to access AWS services according to the granted permissions."
        }
      },
      {
        "title": {
          "pt-BR": "Usuário administrador root",
          "en": "Root administrator user"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O usuário root tem acesso amplo à conta e não deve ser usado por aplicações; conceder essas credenciais viola o princípio de privilégio mínimo.",
          "en": "The root user has broad account access and should not be used by applications; granting its credentials violates the principle of least privilege."
        }
      },
      {
        "title": {
          "pt-BR": "Configurar access keys na aplicação",
          "en": "Configure access keys in the application"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Configurar access keys estáticas na aplicação cria credenciais que precisam ser armazenadas e rotacionadas com cuidado; uma função IAM na instância evita essa necessidade.",
          "en": "Configuring static access keys in the application creates credentials that must be stored and carefully rotated; an IAM role on the instance avoids that need."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Uma função do AWS Identity and Access Management (IAM) associada à instância por um perfil de instância fornece credenciais temporárias que a aplicação pode obter automaticamente, sem armazenar chaves estáticas. Chaves hardcoded, access keys configuradas na aplicação e credenciais root aumentam o risco e violam o princípio de privilégio mínimo.",
      "en": "An AWS Identity and Access Management (IAM) role attached to the instance through an instance profile provides temporary credentials that the application can obtain automatically without storing static keys. Hard-coded keys, access keys configured in the application, and root credentials increase risk and violate least privilege."
    }
  },
  {
    "id": 102,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Uma empresa possui licenças baseadas em núcleos físicos e pretende usar o modelo BYOL no EC2. Qual opção usar?",
      "en": "A company has licenses based on physical cores and plans to use the BYOL model on EC2. Which option should it use?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Reserved Instances",
          "en": "Reserved Instances"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Reserved Instances são um modelo de cobrança (desconto por compromisso de 1 ou 3 anos), não um tipo de tenancy. Elas não dão visibilidade de sockets e núcleos físicos nem afinidade com um servidor, que são necessários para licenças por núcleo físico.",
          "en": "Reserved Instances are a billing model (1- or 3-year commitment discount), not a tenancy type. They give no visibility into physical sockets and cores or affinity to a server, which per-physical-core licenses require."
        }
      },
      {
        "title": {
          "pt-BR": "EC2 com tenancy default",
          "en": "EC2 with default tenancy"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Com tenancy default, as instâncias rodam em hardware compartilhado com outros clientes e podem mudar de servidor físico. Não há como contar ou fixar núcleos físicos, então não é possível comprovar a conformidade de licenças BYOL (Bring Your Own License) baseadas em núcleos.",
          "en": "With default tenancy, instances run on hardware shared with other customers and may move between physical servers. You cannot count or pin physical cores, so BYOL (Bring Your Own License) compliance for core-based licenses cannot be demonstrated."
        }
      },
      {
        "title": {
          "pt-BR": "EC2 Dedicated Host",
          "en": "EC2 Dedicated Host"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Um EC2 Dedicated Host é um servidor físico totalmente dedicado a você. Ele expõe sockets e núcleos físicos e permite manter as instâncias no mesmo servidor, requisitos para usar licenças existentes por socket, núcleo ou VM (BYOL - Bring Your Own License), como Windows Server, SQL Server e Oracle, e comprovar conformidade. Integra-se ao AWS License Manager.",
          "en": "An EC2 Dedicated Host is a physical server fully dedicated to you. It exposes physical sockets and cores and lets you keep instances on the same server, which is required to use existing per-socket, per-core or per-VM licenses (BYOL - Bring Your Own License) such as Windows Server, SQL Server and Oracle, and to prove compliance. It integrates with AWS License Manager."
        }
      },
      {
        "title": {
          "pt-BR": "Capacity Reservation",
          "en": "Capacity Reservation"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Capacity Reservation apenas garante capacidade de computação em uma zona de disponibilidade. Ela não dedica um servidor físico a você nem expõe sockets/núcleos, portanto não atende requisitos de licenciamento BYOL (Bring Your Own License).",
          "en": "Capacity Reservation only guarantees compute capacity in an Availability Zone. It does not dedicate a physical server to you or expose sockets/cores, so it does not satisfy BYOL (Bring Your Own License) licensing requirements."
        }
      }
    ],
    "explanation": {
      "pt-BR": "BYOL (Bring Your Own License) é usar licenças de software que você já possui, como Windows Server, SQL Server ou Oracle, na AWS. Muitas dessas licenças são contadas por socket ou núcleo físico e exigem comprovar em qual servidor rodam. O EC2 Dedicated Host é um servidor físico dedicado a você, que expõe sockets e núcleos e mantém as instâncias no mesmo host, atendendo a esse requisito. Reserved Instances (desconto de cobrança), tenancy default (hardware compartilhado) e Capacity Reservation (apenas reserva de capacidade) não dão controle sobre o servidor físico.",
      "en": "BYOL (Bring Your Own License) means using software licenses you already own, such as Windows Server, SQL Server or Oracle, on AWS. Many of these are counted per physical socket or core and require showing which server they run on. An EC2 Dedicated Host is a physical server dedicated to you that exposes sockets and cores and keeps instances on the same host, meeting this requirement. Reserved Instances (billing discount), default tenancy (shared hardware) and Capacity Reservation (capacity only) give no control over the physical server."
    }
  },
  {
    "id": 103,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "No modelo compartilhado para EC2, qual tarefa é da AWS?",
      "en": "Under the shared responsibility model for EC2, which task is AWS's responsibility?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Atualizar sistema operacional",
          "en": "Update the operating system"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O cliente é responsável por corrigir e atualizar o sistema operacional convidado da instância EC2; a AWS mantém a infraestrutura subjacente, não o software instalado nela.",
          "en": "The customer is responsible for patching and updating the EC2 instance's guest operating system; AWS maintains the underlying infrastructure, not the software installed on it."
        }
      },
      {
        "title": {
          "pt-BR": "Atualizar hardware físico",
          "en": "Update the physical hardware"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "A AWS mantém e substitui os servidores físicos, o armazenamento e os equipamentos de rede que sustentam as instâncias EC2, como parte da segurança da nuvem.",
          "en": "AWS maintains and replaces the physical servers, storage, and networking equipment that underpin EC2 instances as part of security of the cloud."
        }
      },
      {
        "title": {
          "pt-BR": "Atualizar dados do usuário",
          "en": "Update user data"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Os dados inseridos pelo cliente na instância são responsabilidade do cliente, que define sua classificação, proteção e uso; a AWS fornece a infraestrutura onde são armazenados.",
          "en": "Data the customer puts on the instance is the customer's responsibility, including its classification, protection, and use; AWS provides the infrastructure on which it is stored."
        }
      },
      {
        "title": {
          "pt-BR": "Atualizar mecanismo de BD instalado na EC2",
          "en": "Update the database engine installed on EC2"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Quando o cliente instala um mecanismo de banco de dados em EC2, cabe a ele configurá-lo e aplicar atualizações. Esse gerenciamento não é feito pela AWS como ocorreria com aspectos gerenciados de um serviço de banco de dados gerenciado.",
          "en": "When a customer installs a database engine on EC2, the customer configures and patches it. AWS does not manage it as it would managed aspects of a managed database service."
        }
      }
    ],
    "explanation": {
      "pt-BR": "No Amazon Elastic Compute Cloud (Amazon EC2), a AWS protege a infraestrutura subjacente, incluindo instalações e hardware físico. O cliente administra o sistema operacional convidado, os dados e os mecanismos de banco de dados que instala; portanto, essas atualizações não são responsabilidade da AWS.",
      "en": "With Amazon Elastic Compute Cloud (Amazon EC2), AWS protects the underlying infrastructure, including facilities and physical hardware. The customer manages the guest operating system, data, and database engines they install, so those updates are not AWS's responsibility."
    }
  },
  {
    "id": 104,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Armazenamento AWS",
      "en": "AWS storage"
    },
    "description": {
      "pt-BR": "Qual serviço encontra dados confidenciais e informações pessoais em objetos S3?",
      "en": "Which service discovers sensitive data and personally identifiable information in S3 objects?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Trusted Advisor",
          "en": "Trusted Advisor"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Trusted Advisor verifica recursos e recomendações em áreas como custo, segurança e confiabilidade. Ele não classifica o conteúdo dos objetos S3 para localizar informações pessoais identificáveis.",
          "en": "AWS Trusted Advisor checks resources and provides recommendations in areas such as cost, security, and reliability. It does not classify S3 object contents to find personally identifiable information."
        }
      },
      {
        "title": {
          "pt-BR": "GuardDuty",
          "en": "GuardDuty"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon GuardDuty analisa sinais de ameaças e atividades potencialmente maliciosas na conta e nas cargas de trabalho. Ele não examina objetos S3 para descobrir dados confidenciais como faz o Macie.",
          "en": "Amazon GuardDuty analyzes threat signals and potentially malicious activity in an account and its workloads. It does not inspect S3 objects to discover sensitive data as Macie does."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Macie",
          "en": "Amazon Macie"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Amazon Macie usa descoberta e classificação de dados para identificar dados confidenciais em buckets S3, incluindo informações pessoais identificáveis, atendendo diretamente a essa necessidade.",
          "en": "Amazon Macie uses data discovery and classification to identify sensitive data in S3 buckets, including personally identifiable information, directly meeting this need."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Inspector",
          "en": "Amazon Inspector"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Inspector identifica vulnerabilidades e exposições em workloads compatíveis, como instâncias EC2 e imagens de contêiner. Sua função é avaliar segurança de workloads, não localizar informações pessoais em objetos S3.",
          "en": "Amazon Inspector identifies vulnerabilities and exposures in supported workloads, such as EC2 instances and container images. Its role is workload security assessment, not locating personal information in S3 objects."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Amazon Macie descobre e ajuda a proteger dados confidenciais, inclusive informações pessoais identificáveis, em buckets do Amazon Simple Storage Service (Amazon S3). Trusted Advisor avalia práticas recomendadas, GuardDuty detecta ameaças e Inspector avalia vulnerabilidades, mas não são a ferramenta de descoberta de dados confidenciais em objetos S3.",
      "en": "Amazon Macie discovers and helps protect sensitive data, including personally identifiable information, in Amazon Simple Storage Service (Amazon S3) buckets. Trusted Advisor evaluates best practices, GuardDuty detects threats, and Inspector assesses vulnerabilities, but they are not the tool for discovering sensitive data in S3 objects."
    }
  },
  {
    "id": 105,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Banco de dados e análise",
      "en": "Databases and analytics"
    },
    "description": {
      "pt-BR": "Uma empresa precisa migrar um banco de dados local para o Amazon RDS mantendo o banco de origem em uso durante a migração, replicando continuamente as alterações por meio de CDC. Qual serviço atende a esse requisito?",
      "en": "A company needs to migrate an on-premises database to Amazon RDS while keeping the source database in use during the migration, continuously replicating changes using CDC. Which service meets this requirement?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Application Migration Service",
          "en": "Application Migration Service"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Application Migration Service replica e migra servidores inteiros para a AWS, incluindo sistemas e aplicações. Ele não é o serviço voltado à migração e à replicação contínua de dados entre bancos usando CDC, que é função do AWS DMS. DMS (Database Migration Service, serviço de migração de banco de dados) é o serviço da AWS que move dados entre bancos de dados. CDC (Change Data Capture, captura de dados de alteração) é a técnica que identifica e replica continuamente as mudanças feitas no banco de origem.",
          "en": "AWS Application Migration Service replicates and migrates entire servers to AWS, including their systems and applications. It is not the service intended for migrating and continuously replicating data between databases using CDC, which is the job of AWS DMS. DMS (Database Migration Service) is the AWS service that moves data between databases. CDC (Change Data Capture) is the technique that identifies and continuously replicates the changes made to the source database."
        }
      },
      {
        "title": {
          "pt-BR": "Migration Evaluator",
          "en": "Migration Evaluator"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Migration Evaluator analisa ambientes locais para apoiar decisões e estimativas de migração. Ele não executa a migração nem mantém dados de bancos sincronizados com CDC, tarefas do AWS DMS. DMS (Database Migration Service, serviço de migração de banco de dados) é o serviço da AWS que move dados entre bancos de dados. CDC (Change Data Capture, captura de dados de alteração) é a técnica que identifica e replica continuamente as mudanças feitas no banco de origem.",
          "en": "Migration Evaluator analyzes on-premises environments to support migration decisions and estimates. It does not perform the migration or keep database data synchronized with CDC, which are jobs for AWS DMS. DMS (Database Migration Service) is the AWS service that moves data between databases. CDC (Change Data Capture) is the technique that identifies and continuously replicates the changes made to the source database."
        }
      },
      {
        "title": {
          "pt-BR": "Schema Conversion Tool",
          "en": "Schema Conversion Tool"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Schema Conversion Tool ajuda a converter esquemas e código de banco de dados quando há incompatibilidades entre mecanismos. Ele não move os dados nem replica alterações com CDC; isso é tarefa do AWS DMS. DMS (Database Migration Service, serviço de migração de banco de dados) é o serviço da AWS que move dados entre bancos de dados. CDC (Change Data Capture, captura de dados de alteração) é a técnica que identifica e replica continuamente as mudanças feitas no banco de origem.",
          "en": "AWS Schema Conversion Tool helps convert database schemas and code when engines are incompatible. It does not move the data or replicate changes with CDC; that is a task for AWS DMS. DMS (Database Migration Service) is the AWS service that moves data between databases. CDC (Change Data Capture) is the technique that identifies and continuously replicates the changes made to the source database."
        }
      },
      {
        "title": {
          "pt-BR": "AWS DMS",
          "en": "AWS DMS"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS DMS migra dados entre bancos de dados e usa CDC para capturar alterações feitas na origem durante e após a carga inicial. Isso permite manter o banco de origem em uso e o destino no Amazon RDS atualizado até a transição. DMS (Database Migration Service, serviço de migração de banco de dados) é o serviço da AWS que move dados entre bancos de dados. CDC (Change Data Capture, captura de dados de alteração) é a técnica que identifica e replica continuamente as mudanças feitas no banco de origem.",
          "en": "AWS DMS migrates data between databases and uses CDC to capture changes made at the source during and after the initial load. This lets the source database stay in use while the Amazon RDS target is kept up to date until cutover. DMS (Database Migration Service) is the AWS service that moves data between databases. CDC (Change Data Capture) is the technique that identifies and continuously replicates the changes made to the source database."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Database Migration Service (AWS DMS) migra bancos de dados e pode replicar alterações contínuas usando Change Data Capture (CDC), mantendo o destino atualizado durante a migração para o Amazon Relational Database Service (Amazon RDS). Application Migration Service migra servidores, Migration Evaluator avalia ambientes e Schema Conversion Tool converte esquemas; nenhum deles substitui o DMS para replicação de dados com CDC. DMS (Database Migration Service, serviço de migração de banco de dados) é o serviço da AWS que move dados entre bancos de dados. CDC (Change Data Capture, captura de dados de alteração) é a técnica que identifica e replica continuamente as mudanças feitas no banco de origem.",
      "en": "AWS Database Migration Service (AWS DMS) migrates databases and can replicate ongoing changes using Change Data Capture (CDC), keeping the target current during migration to Amazon Relational Database Service (Amazon RDS). Application Migration Service migrates servers, Migration Evaluator assesses environments, and Schema Conversion Tool converts schemas; none replaces DMS for data replication with CDC. DMS (Database Migration Service) is the AWS service that moves data between databases. CDC (Change Data Capture) is the technique that identifies and continuously replicates the changes made to the source database."
    }
  },
  {
    "id": 106,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Qual benefício AWS representa a possibilidade de implantar aplicações em diferentes geografias?",
      "en": "Which AWS benefit describes the ability to deploy applications across different geographic locations?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Segurança",
          "en": "Security"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Segurança abrange controles e recursos para proteger workloads e dados. Ela não designa a capacidade geográfica de distribuir aplicações entre regiões.",
          "en": "Security encompasses controls and features for protecting workloads and data. It does not refer to the geographic ability to distribute applications across Regions."
        }
      },
      {
        "title": {
          "pt-BR": "Economias de escala",
          "en": "Economies of scale"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Economias de escala decorrem da operação em grande escala da AWS, que pode reduzir custos unitários. Esse conceito não significa que uma aplicação possa ser implantada em diferentes geografias.",
          "en": "Economies of scale result from AWS operating at large scale, which can lower unit costs. This concept does not mean an application can be deployed across different geographies."
        }
      },
      {
        "title": {
          "pt-BR": "Alcance global",
          "en": "Global reach"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O alcance global permite usar regiões e infraestrutura distribuída da AWS para implantar aplicações mais perto de usuários em várias geografias. Essa é a característica descrita.",
          "en": "Global reach lets customers use AWS Regions and distributed infrastructure to deploy applications closer to users in multiple geographies. This is the characteristic described."
        }
      },
      {
        "title": {
          "pt-BR": "Elasticidade",
          "en": "Elasticidade"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Elasticidade permite aumentar ou reduzir recursos conforme a demanda muda. Ela trata do ajuste de capacidade, não da localização geográfica onde a aplicação pode ser implantada.",
          "en": "Elasticity allows resources to grow or shrink as demand changes. It concerns capacity adjustment, not the geographic locations where an application can be deployed."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Alcance global é o benefício de poder implantar aplicações e atender usuários em diferentes regiões geográficas usando a infraestrutura global da AWS. Segurança, economias de escala e elasticidade são benefícios distintos e não descrevem, por si sós, a distribuição geográfica da implantação.",
      "en": "Global reach is the benefit of being able to deploy applications and serve users across different geographic locations using AWS's global infrastructure. Security, economies of scale, and elasticity are distinct benefits and do not by themselves describe geographic deployment distribution."
    }
  },
  {
    "id": 107,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Qual ferramenta permite executar consultas interativas em logs do CloudWatch?",
      "en": "Which tool allows interactive queries on CloudWatch logs?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "EventBridge",
          "en": "EventBridge"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon EventBridge conecta aplicações usando barramentos e regras para encaminhar eventos a destinos. Ele não é o mecanismo para executar consultas interativas sobre logs do CloudWatch.",
          "en": "Amazon EventBridge connects applications using event buses and rules to route events to targets. It is not the mechanism for running interactive queries over CloudWatch logs."
        }
      },
      {
        "title": {
          "pt-BR": "Anomaly Detection",
          "en": "Anomaly Detection"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A detecção de anomalias do CloudWatch usa padrões de métricas para sinalizar comportamentos incomuns. Ela não permite formular consultas interativas sobre registros de log.",
          "en": "CloudWatch anomaly detection uses metric patterns to flag unusual behavior. It does not let users compose interactive queries over log records."
        }
      },
      {
        "title": {
          "pt-BR": "CloudWatch Logs Insights",
          "en": "CloudWatch Logs Insights"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O CloudWatch Logs Insights oferece uma linguagem e um editor de consultas para pesquisar, filtrar e agregar dados de logs. Assim, é possível investigar os eventos de forma interativa.",
          "en": "CloudWatch Logs Insights provides a query language and editor to search, filter, and aggregate log data. This enables interactive investigation of log events."
        }
      },
      {
        "title": {
          "pt-BR": "Log Streams",
          "en": "Log Streams"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Um log stream é uma sequência de eventos de log de uma mesma origem dentro de um grupo de logs. Ele organiza os registros, mas não é uma ferramenta de consulta; essa função é do Logs Insights.",
          "en": "A log stream is a sequence of log events from the same source within a log group. It organizes records but is not a query tool; that function belongs to Logs Insights."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O CloudWatch Logs Insights permite consultar e analisar interativamente eventos armazenados em grupos de logs do Amazon CloudWatch. EventBridge encaminha eventos, detecção de anomalias identifica padrões incomuns e streams organizam eventos dentro de grupos de logs, mas não oferecem essa experiência de consulta interativa.",
      "en": "CloudWatch Logs Insights lets users interactively query and analyze events stored in Amazon CloudWatch log groups. EventBridge routes events, anomaly detection identifies unusual patterns, and streams organize events within log groups, but they do not provide this interactive query experience."
    }
  },
  {
    "id": 108,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "AWS Well-Architected e resiliência",
      "en": "Well-Architected and resilience"
    },
    "description": {
      "pt-BR": "Qual característica descreve alta disponibilidade?",
      "en": "Which characteristic describes high availability?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Aplicação continua acessível apesar de falhas",
          "en": "The application remains accessible despite failures"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Alta disponibilidade busca minimizar interrupções por meio de componentes redundantes e mecanismos de recuperação, para que a aplicação continue acessível durante falhas.",
          "en": "High availability aims to minimize interruptions through redundant components and recovery mechanisms so the application remains accessible during failures."
        }
      },
      {
        "title": {
          "pt-BR": "Implantar em qualquer região",
          "en": "Deploy in any Region"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Implantar em qualquer região descreve alcance e escolha de localização geográfica. Isso não garante por si só que uma aplicação continue acessível quando seus componentes falham.",
          "en": "Deploying in any Region describes geographic reach and location choice. It does not by itself ensure that an application remains accessible when its components fail."
        }
      },
      {
        "title": {
          "pt-BR": "Pagar por consumo",
          "en": "Pay as you go"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Pagar conforme o consumo é um modelo de cobrança da nuvem, no qual o custo varia com o uso. Ele não define a continuidade do serviço diante de falhas.",
          "en": "Paying as you go is a cloud billing model in which cost varies with usage. It does not define service continuity during failures."
        }
      },
      {
        "title": {
          "pt-BR": "Suporte 24h",
          "en": "24/7 support"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Suporte 24 horas descreve a disponibilidade de assistência técnica. Esse serviço de suporte não é uma propriedade de disponibilidade da aplicação em execução.",
          "en": "24/7 support describes the availability of technical assistance. This support service is not an availability property of the running application."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Alta disponibilidade significa manter uma aplicação acessível e operacional mesmo quando ocorrem falhas, normalmente com redundância e recuperação rápida. A possibilidade de escolher uma região, o modelo de cobrança por consumo e a disponibilidade de suporte são conceitos diferentes, não a definição de alta disponibilidade.",
      "en": "High availability means keeping an application accessible and operational despite failures, typically through redundancy and rapid recovery. The ability to choose a Region, pay based on consumption, and access support are different concepts, not the definition of high availability."
    }
  },
  {
    "id": 109,
    "domain": "billing-pricing-support",
    "title": {
      "pt-BR": "Preços, custos e suporte",
      "en": "Pricing, costs and support"
    },
    "description": {
      "pt-BR": "Qual plano de suporte AWS oferece TAM designado tradicionalmente na certificação?",
      "en": "Which AWS Support plan has traditionally included a designated TAM for the certification exam?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Basic Support",
          "en": "Basic Support"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Basic Support oferece recursos básicos, documentação e acesso ao suporte para questões de conta e cobrança, sem um TAM designado.",
          "en": "Basic Support provides basic resources, documentation, and access to support for account and billing issues, without a designated TAM."
        }
      },
      {
        "title": {
          "pt-BR": "Developer Support",
          "en": "Developer Support"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Developer Support oferece orientação técnica para desenvolvimento e testes, mas não inclui o TAM designado associado tradicionalmente ao Enterprise Support.",
          "en": "Developer Support provides technical guidance for development and testing, but it does not include the designated TAM traditionally associated with Enterprise Support."
        }
      },
      {
        "title": {
          "pt-BR": "Business Support",
          "en": "Business Support"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Business Support oferece assistência técnica para workloads em produção e recursos de suporte ampliados. No modelo tradicional da certificação, ele não fornece o TAM dedicado indicado pela questão.",
          "en": "Business Support provides technical assistance for production workloads and expanded support features. In the traditional certification model, it does not provide the dedicated TAM specified by the question."
        }
      },
      {
        "title": {
          "pt-BR": "Enterprise Support",
          "en": "Enterprise Support"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Enterprise Support inclui tradicionalmente um TAM designado para compreender as necessidades da organização, oferecer orientação proativa e apoiar a resolução de questões complexas.",
          "en": "Enterprise Support has traditionally included a designated TAM to understand the organization's needs, provide proactive guidance, and help address complex issues."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Tradicionalmente, o Enterprise Support inclui um Technical Account Manager (TAM) designado, que oferece orientação proativa e ajuda a coordenar o suporte. Basic, Developer e Business dão acesso a diferentes níveis de suporte, mas não incluem esse TAM designado no modelo tradicional abordado pela questão.",
      "en": "Traditionally, Enterprise Support includes a designated Technical Account Manager (TAM) who provides proactive guidance and helps coordinate support. Basic, Developer, and Business provide different support levels but do not include that designated TAM in the traditional model addressed by the question."
    }
  },
  {
    "id": 110,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Armazenamento AWS",
      "en": "AWS storage"
    },
    "description": {
      "pt-BR": "Qual recurso S3 protege contra exclusões e substituições acidentais?",
      "en": "Which S3 feature protects against accidental deletions and overwrites?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Criptografia em servidor",
          "en": "Server-side encryption"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A criptografia no servidor protege os dados armazenados contra leitura não autorizada sem a chave apropriada. Ela não preserva versões anteriores quando um objeto é sobrescrito ou excluído.",
          "en": "Server-side encryption protects stored data from unauthorized reading without the appropriate key. It does not preserve prior versions when an object is overwritten or deleted."
        }
      },
      {
        "title": {
          "pt-BR": "S3 Access Points",
          "en": "S3 Access Points"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "S3 Access Points fornecem endpoints e políticas de acesso específicos para diferentes aplicações ou equipes. Eles ajudam a controlar o acesso, mas não permitem restaurar versões removidas ou substituídas.",
          "en": "S3 Access Points provide endpoints and access policies tailored to different applications or teams. They help control access but do not restore deleted or overwritten versions."
        }
      },
      {
        "title": {
          "pt-BR": "Lifecycle",
          "en": "Lifecycle"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "As regras de S3 Lifecycle automatizam ações como transição de objetos entre classes de armazenamento ou expiração. Elas gerenciam o ciclo de vida, não oferecem por si mesmas proteção para recuperar versões anteriores.",
          "en": "S3 Lifecycle rules automate actions such as transitioning objects between storage classes or expiring them. They manage object lifecycle and do not by themselves protect earlier versions for recovery."
        }
      },
      {
        "title": {
          "pt-BR": "S3 Versioning",
          "en": "S3 Versioning"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Com o versionamento S3 habilitado, gravações criam versões de objeto e exclusões normalmente inserem um marcador de exclusão, permitindo recuperar versões anteriores. Isso protege contra substituições e exclusões acidentais.",
          "en": "With S3 Versioning enabled, writes create object versions and deletions typically add a delete marker, allowing earlier versions to be recovered. This protects against accidental overwrites and deletions."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O versionamento do Amazon Simple Storage Service (Amazon S3) mantém versões distintas de um objeto, permitindo recuperar uma versão anterior após uma substituição ou exclusão acidental. Criptografia protege a confidencialidade, Access Points simplificam o gerenciamento de acesso e Lifecycle automatiza transições ou expirações, mas esses recursos não substituem a recuperação por versões.",
      "en": "Amazon Simple Storage Service (Amazon S3) Versioning keeps distinct versions of an object, allowing an earlier version to be recovered after an accidental overwrite or deletion. Encryption protects confidentiality, Access Points simplify access management, and Lifecycle automates transitions or expiration, but these features do not replace version-based recovery."
    }
  },
  {
    "id": 111,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Que ferramenta permite acessar recursos AWS diretamente pelo código da aplicação?",
      "en": "Which tool lets you access AWS resources directly from application code?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Console",
          "en": "AWS Console"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Console de Gerenciamento da AWS é uma interface gráfica usada por pessoas para configurar e administrar recursos. O código de uma aplicação usa SDKs ou APIs, não essa interface web.",
          "en": "The AWS Management Console is a graphical interface people use to configure and administer resources. Application code uses SDKs or APIs, not this web interface."
        }
      },
      {
        "title": {
          "pt-BR": "CodeDeploy",
          "en": "CodeDeploy"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS CodeDeploy automatiza implantações de aplicações em destinos compatíveis. Ele não fornece as bibliotecas que o código usa para chamar serviços AWS durante a execução.",
          "en": "AWS CodeDeploy automates application deployments to supported targets. It does not provide the libraries that code uses to call AWS services at runtime."
        }
      },
      {
        "title": {
          "pt-BR": "CodePipeline",
          "en": "CodePipeline"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS CodePipeline automatiza etapas de entrega contínua, como compilar, testar e implantar aplicações. Essa orquestração de pipeline não é o mecanismo de acesso a recursos a partir do código.",
          "en": "AWS CodePipeline automates continuous delivery stages such as building, testing, and deploying applications. This pipeline orchestration is not the mechanism for accessing resources from code."
        }
      },
      {
        "title": {
          "pt-BR": "AWS SDKs",
          "en": "AWS SDKs"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Os SDKs oferecem bibliotecas específicas de linguagem que simplificam a autenticação e as chamadas às APIs dos serviços AWS. Assim, o próprio código da aplicação pode interagir com recursos AWS.",
          "en": "SDKs provide language-specific libraries that simplify authentication and calls to AWS service APIs. Application code can therefore interact with AWS resources directly."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Os AWS Software Development Kits (SDKs) fornecem bibliotecas e APIs para que o código da aplicação chame serviços AWS e acesse recursos de forma programática. O Console é uma interface gráfica, enquanto CodeDeploy e CodePipeline automatizam implantação e entrega; eles não são bibliotecas de acesso aos recursos dentro do código da aplicação.",
      "en": "AWS Software Development Kits (SDKs) provide libraries and APIs that let application code call AWS services and access resources programmatically. The Console is a graphical interface, while CodeDeploy and CodePipeline automate deployment and delivery; they are not libraries for accessing resources from application code."
    }
  },
  {
    "id": 112,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "AWS Cloud Adoption Framework",
      "en": "AWS Cloud Adoption Framework"
    },
    "description": {
      "pt-BR": "Qual capacidade está na perspectiva Operations do AWS CAF?",
      "en": "Which capability belongs to the Operations perspective of AWS CAF?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Identity and Access Management",
          "en": "Identity and Access Management"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Identity and Access Management (IAM) administra identidades e permissões e está relacionado à perspectiva Security do AWS CAF. Seu foco não é o gerenciamento operacional de desempenho e capacidade.",
          "en": "Identity and Access Management (IAM) manages identities and permissions and is associated with the AWS CAF Security perspective. Its focus is not operational performance and capacity management."
        }
      },
      {
        "title": {
          "pt-BR": "Product Management",
          "en": "Product Management"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Product Management ajuda a alinhar produtos e resultados de negócio e pertence à perspectiva Business do AWS CAF. Não é uma capacidade da perspectiva Operations.",
          "en": "Product Management helps align products and business outcomes and belongs to the AWS CAF Business perspective. It is not an Operations capability."
        }
      },
      {
        "title": {
          "pt-BR": "Performance and Capacity Management",
          "en": "Performance and Capacity Management"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Performance and Capacity Management monitora desempenho, demanda e capacidade para manter workloads eficientes e dimensionados adequadamente. Essa capacidade pertence à perspectiva Operations.",
          "en": "Performance and Capacity Management monitors performance, demand, and capacity to keep workloads efficient and appropriately sized. This capability belongs to the Operations perspective."
        }
      },
      {
        "title": {
          "pt-BR": "Application Portfolio Management",
          "en": "Application Portfolio Management"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Application Portfolio Management organiza e avalia o portfólio de aplicações e é uma capacidade da perspectiva Platform no AWS CAF. Ela não corresponde à capacidade operacional indicada.",
          "en": "Application Portfolio Management organizes and evaluates the application portfolio and is a capability of the AWS CAF Platform perspective. It is not the Operations capability specified."
        }
      }
    ],
    "explanation": {
      "pt-BR": "No AWS Cloud Adoption Framework (AWS CAF), Performance and Capacity Management pertence à perspectiva Operations e trata de monitorar e otimizar desempenho e capacidade. Identity and Access Management está associado à perspectiva Security, Product Management à Business e Application Portfolio Management à Platform, não à capacidade Operations pedida.",
      "en": "In the AWS Cloud Adoption Framework (AWS CAF), Performance and Capacity Management belongs to the Operations perspective and concerns monitoring and optimizing performance and capacity. Identity and Access Management is associated with Security, Product Management with Business, and Application Portfolio Management with Platform, not the requested Operations capability."
    }
  },
  {
    "id": 113,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Qual serviço se integra diretamente ao AWS WAF?",
      "en": "Which service integrates directly with AWS WAF?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Network Load Balancer",
          "en": "Network Load Balancer"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Network Load Balancer opera na camada de transporte para encaminhar conexões TCP, UDP e TLS com alto desempenho. Ele não é o balanceador de aplicações que oferece a integração direta descrita com AWS WAF.",
          "en": "Network Load Balancer operates at the transport layer to route TCP, UDP, and TLS connections with high performance. It is not the application load balancer that provides the direct AWS WAF integration described."
        }
      },
      {
        "title": {
          "pt-BR": "Gateway Load Balancer",
          "en": "Gateway Load Balancer"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Gateway Load Balancer facilita a implantação e o escalonamento de appliances virtuais de rede de terceiros. Ele não é o destino convencional para associar uma Web ACL do AWS WAF.",
          "en": "Gateway Load Balancer helps deploy and scale third-party virtual network appliances. It is not the conventional target for associating an AWS WAF web ACL."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Lambda",
          "en": "AWS Lambda"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Lambda executa código sem a administração de servidores e pode ser integrado a fluxos de aplicações. Ele não é o balanceador de camada de aplicação que se associa diretamente ao AWS WAF nesta questão.",
          "en": "AWS Lambda runs code without server management and can integrate into application workflows. It is not the application-layer load balancer directly associated with AWS WAF in this question."
        }
      },
      {
        "title": {
          "pt-BR": "Application Load Balancer",
          "en": "Application Load Balancer"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Application Load Balancer processa tráfego HTTP e HTTPS na camada de aplicação e oferece integração com o AWS WAF. Uma Web ACL pode filtrar solicitações antes que elas cheguem aos destinos da aplicação.",
          "en": "Application Load Balancer processes HTTP and HTTPS traffic at the application layer and integrates with AWS WAF. A web ACL can filter requests before they reach application targets."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Application Load Balancer (ALB) integra-se diretamente ao AWS Web Application Firewall (AWS WAF), que pode aplicar regras de segurança a solicitações HTTP e HTTPS recebidas. Network Load Balancer e Gateway Load Balancer atendem a outros padrões de tráfego e não são os load balancers indicados para essa integração direta; Lambda é um serviço de computação, não um balanceador compatível nesse contexto.",
      "en": "Application Load Balancer (ALB) integrates directly with AWS Web Application Firewall (AWS WAF), which can apply security rules to incoming HTTP and HTTPS requests. Network Load Balancer and Gateway Load Balancer serve other traffic patterns and are not the load balancers specified for this direct integration; Lambda is a compute service, not a compatible load balancer in this context."
    }
  },
  {
    "id": 114,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Modelo de responsabilidade compartilhada",
      "en": "Shared responsibility model"
    },
    "description": {
      "pt-BR": "No modelo de responsabilidade compartilhada quais tarefas são do cliente? (Duas.)",
      "en": "Under the shared responsibility model, which tasks are the customer's responsibility? (Select two.)"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": true,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Criptografia do lado cliente",
          "en": "Client-side encryption"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Na criptografia do lado do cliente, o cliente criptografa os dados antes de enviá-los à AWS e controla as chaves e o processo de criptografia. Essa configuração dos dados é responsabilidade do cliente.",
          "en": "With client-side encryption, the customer encrypts data before sending it to AWS and controls the keys and encryption process. This data configuration is the customer's responsibility."
        }
      },
      {
        "title": {
          "pt-BR": "Integridade dos dados do cliente",
          "en": "Customer data integrity"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O cliente é responsável por manter a integridade dos dados que cria e armazena, incluindo controles e processos para evitar alterações indevidas. A AWS fornece a infraestrutura, mas não assume a gestão do conteúdo do cliente.",
          "en": "The customer is responsible for maintaining the integrity of data they create and store, including controls and processes to prevent improper changes. AWS provides the infrastructure but does not manage customer content."
        }
      },
      {
        "title": {
          "pt-BR": "Segurança do hardware regional",
          "en": "Regional hardware security"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A segurança do hardware físico nas regiões, como servidores e equipamentos de rede, é responsabilidade da AWS como parte da segurança da nuvem.",
          "en": "Security of physical hardware in Regions, such as servers and networking equipment, is AWS's responsibility as part of security of the cloud."
        }
      },
      {
        "title": {
          "pt-BR": "Segurança Edge Locations",
          "en": "Edge Location security"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A AWS protege a infraestrutura e a segurança física das Edge Locations distribuídas globalmente. O cliente configura como seus próprios recursos e dados usam esses serviços.",
          "en": "AWS protects the infrastructure and physical security of globally distributed Edge Locations. The customer configures how their own resources and data use these services."
        }
      },
      {
        "title": {
          "pt-BR": "Segurança da rede global",
          "en": "Global network security"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "A AWS protege a rede global que conecta suas regiões e serviços. A configuração de redes virtuais e controles de tráfego dentro da conta continua sob responsabilidade do cliente.",
          "en": "AWS protects the global network connecting its Regions and services. Configuring virtual networks and traffic controls within an account remains the customer's responsibility."
        }
      }
    ],
    "explanation": {
      "pt-BR": "No modelo de responsabilidade compartilhada, o cliente controla a criptografia que aplica antes de enviar dados à AWS e responde pela integridade dos próprios dados. A AWS protege a infraestrutura física regional, as Edge Locations e a rede global, portanto essas tarefas não são as duas responsabilidades do cliente.",
      "en": "Under the shared responsibility model, the customer controls encryption applied before sending data to AWS and is responsible for the integrity of their own data. AWS protects regional physical infrastructure, Edge Locations, and the global network, so those are not the two customer responsibilities."
    }
  },
  {
    "id": 115,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Qual mecanismo fornece autenticação programática via AWS CLI com chaves de longa duração?",
      "en": "Which mechanism provides programmatic authentication through the AWS CLI using long-term keys?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "SSH Keys",
          "en": "SSH Keys"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Chaves SSH autenticam conexões a sistemas, como o acesso a instâncias Linux, e não são credenciais de API da AWS para a CLI.",
          "en": "SSH keys authenticate connections to systems, such as access to Linux instances, and are not AWS API credentials for the CLI."
        }
      },
      {
        "title": {
          "pt-BR": "Políticas de senha",
          "en": "Password policies"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Políticas de senha estabelecem requisitos para senhas de usuários do IAM que entram por autenticação baseada em senha. Elas não autenticam chamadas programáticas da CLI com chaves de longa duração.",
          "en": "Password policies set requirements for IAM users' passwords when they sign in with password-based authentication. They do not authenticate programmatic CLI calls with long-term keys."
        }
      },
      {
        "title": {
          "pt-BR": "IAM Access Keys",
          "en": "IAM Access Keys"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "As chaves de acesso do IAM incluem um access key ID e uma secret access key e permitem assinar chamadas programáticas da CLI. São credenciais de longa duração quando não substituídas por credenciais temporárias, por isso devem ser protegidas e rotacionadas.",
          "en": "IAM access keys consist of an access key ID and a secret access key and can sign programmatic CLI requests. They are long-term credentials when not replaced by temporary credentials, so they must be protected and rotated."
        }
      },
      {
        "title": {
          "pt-BR": "IAM Policies",
          "en": "IAM Policies"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Políticas do IAM especificam quais ações e recursos uma identidade pode acessar. Elas autorizam solicitações, mas não são, por si sós, credenciais para autenticar a CLI.",
          "en": "IAM policies specify which actions and resources an identity may access. They authorize requests but are not, by themselves, credentials for authenticating the CLI."
        }
      }
    ],
    "explanation": {
      "pt-BR": "As chaves de acesso do AWS Identity and Access Management (IAM) são credenciais programáticas, compostas por um identificador e uma chave secreta, que a AWS Command Line Interface (AWS CLI) pode usar para autenticação. Chaves SSH servem normalmente para acesso a sistemas, políticas de senha regulam senhas e políticas do IAM definem permissões, mas nenhuma delas é a credencial de acesso programático descrita.",
      "en": "AWS Identity and Access Management (IAM) access keys are programmatic credentials consisting of an access key ID and a secret access key that the AWS Command Line Interface (AWS CLI) can use for authentication. SSH keys are typically for system access, password policies govern passwords, and IAM policies define permissions, but none is the programmatic access credential described."
    }
  },
  {
    "id": 116,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Qual serviço cria e governa automaticamente uma landing zone AWS com múltiplas contas?",
      "en": "Which service automatically creates and governs a multi-account AWS landing zone?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Trusted Advisor",
          "en": "Trusted Advisor"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Trusted Advisor analisa o ambiente AWS e oferece recomendações de práticas recomendadas, como otimização de custos e segurança. Ele não cria nem governa uma landing zone de múltiplas contas.",
          "en": "AWS Trusted Advisor analyzes an AWS environment and offers best-practice recommendations, such as cost and security optimizations. It does not create or govern a multi-account landing zone."
        }
      },
      {
        "title": {
          "pt-BR": "AWS RAM",
          "en": "AWS RAM"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS RAM permite compartilhar recursos AWS compatíveis entre contas e organizações. Ele não configura a estrutura de contas nem os controles de governança de uma landing zone.",
          "en": "AWS RAM lets customers share supported AWS resources across accounts and organizations. It does not configure the account structure or governance controls of a landing zone."
        }
      },
      {
        "title": {
          "pt-BR": "Control Tower",
          "en": "Control Tower"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Control Tower automatiza a configuração de uma landing zone com várias contas e aplica governança por meio de controles e práticas recomendadas. Isso atende à criação e à governança solicitadas.",
          "en": "AWS Control Tower automates the setup of a multi-account landing zone and applies governance through controls and best practices. This meets the requested creation and governance needs."
        }
      },
      {
        "title": {
          "pt-BR": "Security Hub",
          "en": "Security Hub"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Security Hub centraliza e prioriza descobertas de segurança de serviços e parceiros integrados. Ele apoia a postura de segurança, mas não cria nem governa a landing zone de contas.",
          "en": "AWS Security Hub centralizes and prioritizes security findings from integrated services and partners. It supports security posture but does not create or govern the account landing zone."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Control Tower configura uma landing zone de múltiplas contas e fornece governança contínua com controles e mecanismos de gerenciamento. Trusted Advisor recomenda melhorias, AWS Resource Access Manager (AWS RAM) compartilha recursos e Security Hub agrega descobertas de segurança; nenhum deles provisiona e governa essa landing zone.",
      "en": "AWS Control Tower sets up a multi-account landing zone and provides ongoing governance with controls and management capabilities. Trusted Advisor recommends improvements, AWS Resource Access Manager (AWS RAM) shares resources, and Security Hub aggregates security findings; none provisions and governs that landing zone."
    }
  },
  {
    "id": 117,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Qual capacidade do Amazon Rekognition?",
      "en": "What capability does Amazon Rekognition provide?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Detectar objetos nas imagens",
          "en": "Detect objects in images"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Amazon Rekognition analisa conteúdo visual e pode detectar objetos e cenas em imagens, retornando rótulos e informações relacionadas. Essa é uma capacidade central do serviço.",
          "en": "Amazon Rekognition analyzes visual content and can detect objects and scenes in images, returning labels and related information. This is a core capability of the service."
        }
      },
      {
        "title": {
          "pt-BR": "Redimensionar imagens em massa",
          "en": "Resize images in bulk"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Redimensionar imagens em massa é uma transformação de arquivos que pode ser feita com ferramentas de processamento de imagens ou código. O Rekognition analisa o conteúdo visual, não é um serviço de redimensionamento em lote.",
          "en": "Bulk image resizing is a file transformation that can be performed with image-processing tools or code. Rekognition analyzes visual content; it is not a bulk image-resizing service."
        }
      },
      {
        "title": {
          "pt-BR": "Agendar jobs genéricos",
          "en": "Schedule generic jobs"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Agendar jobs genéricos é uma função de orquestração ou agendamento de tarefas, fornecida por ferramentas apropriadas para esse fim. O Rekognition oferece APIs de análise de imagens e vídeos, não um agendador genérico.",
          "en": "Scheduling generic jobs is an orchestration or task-scheduling function provided by tools designed for that purpose. Rekognition offers image and video analysis APIs, not a generic scheduler."
        }
      },
      {
        "title": {
          "pt-BR": "Adicionar marcas-d’água",
          "en": "Add watermarks"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Adicionar marcas-d'água altera os arquivos de imagem e requer uma ferramenta de edição ou processamento de mídia. O Rekognition pode analisar uma imagem, mas não é um serviço para inserir marcas-d'água.",
          "en": "Adding watermarks modifies image files and requires an editing or media-processing tool. Rekognition can analyze an image, but it is not a service for inserting watermarks."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Amazon Rekognition aplica visão computacional para analisar imagens e vídeos, incluindo a detecção de objetos e a atribuição de rótulos ao conteúdo visual. Redimensionar arquivos, agendar tarefas genéricas ou adicionar marcas-d'água são operações de processamento de mídia que não definem essa capacidade de análise do Rekognition.",
      "en": "Amazon Rekognition applies computer vision to analyze images and videos, including detecting objects and assigning labels to visual content. Resizing files, scheduling generic tasks, and adding watermarks are media-processing operations that do not describe Rekognition's analysis capability."
    }
  },
  {
    "id": 118,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Qual solução permite acesso remoto seguro a EC2 sem SSH público?",
      "en": "Which solution enables secure remote access to EC2 without public SSH?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "EC2 Key Pairs",
          "en": "EC2 Key Pairs"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Pares de chaves do Amazon Elastic Compute Cloud (EC2) fornecem credenciais criptográficas para autenticação, normalmente em conexões SSH. Eles não eliminam a necessidade de conectividade de rede e de uma porta de gerenciamento acessível.",
          "en": "Amazon Elastic Compute Cloud (EC2) key pairs provide cryptographic credentials for authentication, commonly with Secure Shell (SSH) connections. They do not remove the need for network connectivity and an accessible management port."
        }
      },
      {
        "title": {
          "pt-BR": "IAM isoladamente",
          "en": "IAM alone"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Identity and Access Management (IAM) controla identidades e permissões para recursos e APIs da AWS. Sem um serviço de sessão, como o Session Manager, o IAM isoladamente não cria uma conexão remota com o sistema operacional da instância.",
          "en": "AWS Identity and Access Management (IAM) controls identities and permissions for AWS resources and APIs. Without a session service such as Session Manager, IAM alone does not establish a remote connection to the instance operating system."
        }
      },
      {
        "title": {
          "pt-BR": "Systems Manager Session Manager",
          "en": "Systems Manager Session Manager"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Session Manager, recurso do AWS Systems Manager, abre sessões de gerenciamento pela infraestrutura do Systems Manager e pode registrar a atividade. Com as permissões e o agente necessários, evita expor SSH publicamente ou administrar chaves SSH.",
          "en": "Session Manager, a feature of AWS Systems Manager, opens management sessions through Systems Manager infrastructure and can log session activity. With the required permissions and agent, it avoids publicly exposing SSH or managing SSH keys."
        }
      },
      {
        "title": {
          "pt-BR": "Network ACLs",
          "en": "Network ACLs"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "As listas de controle de acesso à rede (Network ACLs) filtram tráfego de entrada e saída no nível da sub-rede. Elas podem restringir SSH, mas não fornecem o mecanismo de acesso remoto à instância.",
          "en": "Network access control lists (network ACLs) filter inbound and outbound traffic at the subnet level. They can restrict SSH, but they do not provide the mechanism for remotely accessing the instance."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Systems Manager Session Manager oferece acesso interativo e auditável às instâncias sem exigir portas SSH abertas nem um bastion host público. Pares de chaves, IAM isoladamente e Network ACLs não fornecem, por si sós, essa sessão de gerenciamento remoto.",
      "en": "AWS Systems Manager Session Manager provides interactive, auditable access to instances without requiring open SSH ports or a public bastion host. Key pairs, IAM by itself, and network ACLs do not independently provide this remote management session."
    }
  },
  {
    "id": 119,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Qual serviço suporta faturamento consolidado de várias contas AWS?",
      "en": "Which service supports consolidated billing for multiple AWS accounts?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "QuickSight",
          "en": "QuickSight"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon QuickSight é um serviço de business intelligence para criar análises e visualizações a partir de dados. Ele não consolida a cobrança de várias contas AWS.",
          "en": "Amazon QuickSight is a business intelligence service for creating analyses and visualizations from data. It does not consolidate billing across AWS accounts."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Organizations",
          "en": "AWS Organizations"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Organizations permite administrar várias contas como um grupo e habilitar faturamento consolidado. Assim, os custos das contas vinculadas podem ser reunidos na conta de gerenciamento pagadora.",
          "en": "AWS Organizations lets multiple accounts be managed as a group and enables consolidated billing. Charges from linked accounts can therefore be combined under the management account that serves as payer."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Macie",
          "en": "Amazon Macie"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Macie ajuda a descobrir e proteger dados confidenciais, como informações de identificação pessoal, no Amazon Simple Storage Service (S3). Ele é um serviço de segurança, não de faturamento consolidado.",
          "en": "Amazon Macie helps discover and protect sensitive data, such as personally identifiable information, in Amazon Simple Storage Service (S3). It is a security service, not a consolidated billing service."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Budgets",
          "en": "AWS Budgets"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Budgets permite definir orçamentos e acompanhar custos, uso e alertas. Ele ajuda a monitorar gastos, mas não reúne as faturas de várias contas como o AWS Organizations.",
          "en": "AWS Budgets lets users set budgets and track costs, usage, and alerts. It helps monitor spending but does not combine invoices across accounts as AWS Organizations does."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Organizations permite reunir contas em uma organização e usar faturamento consolidado, com uma única conta pagadora para os custos das contas vinculadas. Os outros serviços listados tratam de análise, segurança de dados ou acompanhamento de orçamento, não de consolidação de faturas entre contas.",
      "en": "AWS Organizations lets accounts be grouped into an organization and use consolidated billing, with one payer account for charges from linked accounts. The other services listed address analytics, data security, or budget tracking rather than consolidating invoices across accounts."
    }
  },
  {
    "id": 120,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Banco de dados e análise",
      "en": "Databases and analytics"
    },
    "description": {
      "pt-BR": "Qual serviço fornece SQL analytics em escala sobre data warehouse?",
      "en": "Which service provides SQL analytics at scale on a data warehouse?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Neptune",
          "en": "Neptune"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Neptune é um banco de dados gerenciado otimizado para armazenar e consultar dados em grafo. Ele não é o data warehouse para análises SQL descrito.",
          "en": "Amazon Neptune is a managed database optimized for storing and querying graph data. It is not the data warehouse for SQL analytics described here."
        }
      },
      {
        "title": {
          "pt-BR": "RDS",
          "en": "RDS"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Relational Database Service (RDS) facilita a configuração e a operação de bancos de dados relacionais para aplicações. Embora suporte SQL, não é o serviço de data warehouse analítico em escala oferecido pelo Redshift.",
          "en": "Amazon Relational Database Service (RDS) simplifies setting up and operating relational databases for applications. Although it supports SQL, it is not the large-scale analytical data warehouse service offered by Redshift."
        }
      },
      {
        "title": {
          "pt-BR": "Redshift",
          "en": "Redshift"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Amazon Redshift é um serviço de data warehouse gerenciado, criado para consultas analíticas SQL em escala sobre dados integrados de várias fontes. Isso o torna adequado para cargas analíticas, em vez de transações operacionais individuais.",
          "en": "Amazon Redshift is a managed data warehouse built for large-scale SQL analytics over data integrated from multiple sources. This makes it suitable for analytical workloads rather than individual operational transactions."
        }
      },
      {
        "title": {
          "pt-BR": "DynamoDB",
          "en": "DynamoDB"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon DynamoDB é um banco de dados NoSQL gerenciado, com modelos de chave-valor e documento e desempenho de baixa latência. Ele não oferece a função de data warehouse analítico relacional do Redshift.",
          "en": "Amazon DynamoDB is a managed NoSQL database with key-value and document models and low-latency performance. It does not provide Redshift's relational analytical data warehouse function."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Amazon Redshift é um data warehouse em nuvem que executa consultas SQL analíticas em grandes conjuntos de dados. Neptune é voltado a grafos, RDS a bancos relacionais operacionais e DynamoDB a dados NoSQL, portanto não são o serviço de data warehouse pedido.",
      "en": "Amazon Redshift is a cloud data warehouse that runs analytical SQL queries over large datasets. Neptune is designed for graph workloads, RDS for relational databases, and DynamoDB for NoSQL data, so they are not the requested data warehouse service."
    }
  },
  {
    "id": 121,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "IAM e identidades",
      "en": "IAM and identities"
    },
    "description": {
      "pt-BR": "Uma empresa deseja conceder a usuários de uma conta AWS acesso autorizado a recursos de outra conta. Qual recurso deve utilizar?",
      "en": "A company wants to grant users in one AWS account authorized access to resources in another account. Which resource should it use?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "IAM Tag",
          "en": "IAM Tag"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Tags do IAM são rótulos (pares chave-valor) usados para organizar recursos e para controle de acesso baseado em atributos. Uma tag não concede permissões nem permite que usuários de outra conta acessem recursos; ela só classifica ou ajuda a filtrar o acesso.",
          "en": "IAM tags are labels (key-value pairs) used to organize resources and for attribute-based access control. A tag does not grant permissions or let users from another account access resources; it only classifies or helps filter access."
        }
      },
      {
        "title": {
          "pt-BR": "Função do IAM (IAM Role)",
          "en": "IAM role"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Uma função do IAM (IAM Role) é uma identidade com permissões que pode ser assumida por quem precisa dela, como usuários, aplicações ou serviços. Ela não tem senha nem chaves de acesso permanentes: ao assumi-la, a pessoa recebe credenciais de segurança temporárias. Por isso é o recurso indicado para delegar acesso entre contas: a conta que possui os recursos cria a função, define quais permissões ela tem e confia na outra conta; os usuários da outra conta assumem a função e acessam os recursos sem precisar de um usuário IAM nem de chaves de longo prazo na conta de destino.",
          "en": "An IAM role is an identity with permissions that can be assumed by anyone who needs it, such as users, applications or services. It has no permanent password or access keys: when assumed, it provides temporary security credentials. That makes it the right tool to delegate cross-account access: the account that owns the resources creates the role, defines its permissions and trusts the other account; users from the other account assume the role and reach the resources without needing an IAM user or long-term keys in the target account."
        }
      },
      {
        "title": {
          "pt-BR": "IAM Access Analyzer",
          "en": "IAM Access Analyzer"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O IAM Access Analyzer é uma ferramenta de análise: identifica recursos compartilhados com entidades externas e acessos não intencionais. Ele detecta e audita acessos, mas não concede acesso entre contas.",
          "en": "IAM Access Analyzer is an analysis tool: it identifies resources shared with external entities and unintended access. It detects and audits access, but does not grant cross-account access."
        }
      },
      {
        "title": {
          "pt-BR": "Grupo IAM",
          "en": "IAM group"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Um grupo IAM é um conjunto de usuários IAM da mesma conta, usado para aplicar permissões a vários usuários de uma vez. Ele não pode ser usado como principal em uma política nem abrange outras contas, então não resolve o acesso entre contas.",
          "en": "An IAM group is a collection of IAM users in the same account, used to apply permissions to several users at once. It cannot be a principal in a policy and does not span accounts, so it does not solve cross-account access."
        }
      }
    ],
    "explanation": {
      "pt-BR": "A função do IAM (IAM Role) é o recurso correto para acesso entre contas: ela entrega credenciais temporárias a quem a assume, sem criar usuários nem chaves permanentes na conta de destino. IAM Tag apenas rotula recursos, IAM Access Analyzer apenas analisa e audita acessos, e o grupo IAM só reúne usuários de uma mesma conta; nenhum deles concede acesso a outra conta.",
      "en": "The IAM role is the right resource for cross-account access: it gives temporary credentials to whoever assumes it, without creating users or permanent keys in the target account. IAM tags only label resources, IAM Access Analyzer only analyzes and audits access, and an IAM group only gathers users within one account; none of them grants access to another account."
    }
  },
  {
    "id": 122,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "IAM e identidades",
      "en": "IAM and identities"
    },
    "description": {
      "pt-BR": "Qual serviço totalmente gerenciado auxilia na criação, teste e gerenciamento de imagens personalizadas para EC2?",
      "en": "Which fully managed service helps create, test, and manage custom EC2 images?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Elastic Beanstalk",
          "en": "AWS Elastic Beanstalk"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Elastic Beanstalk facilita a implantação e a operação de aplicações em linguagens e plataformas compatíveis. Ele gerencia recursos da aplicação, mas não cria e testa imagens de máquina personalizadas.",
          "en": "AWS Elastic Beanstalk simplifies deploying and operating applications on supported languages and platforms. It manages application resources, but does not build and test custom machine images."
        }
      },
      {
        "title": {
          "pt-BR": "EC2 Image Builder",
          "en": "EC2 Image Builder"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O EC2 Image Builder é um serviço gerenciado para automatizar pipelines de criação de imagens, aplicar configurações e executar testes antes de distribuir imagens personalizadas. Por isso, atende ao ciclo de criação, teste e gerenciamento solicitado.",
          "en": "EC2 Image Builder is a managed service for automating image-building pipelines, applying configurations, and running tests before distributing custom images. It therefore supports the requested creation, testing, and management lifecycle."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Machine Image (AMI)",
          "en": "Amazon Machine Image (AMI)"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Uma Amazon Machine Image (AMI) é um modelo que contém as informações necessárias para iniciar instâncias EC2. A AMI é o produto da criação de imagem, não o serviço gerenciado que automatiza sua criação e seus testes.",
          "en": "An Amazon Machine Image (AMI) is a template containing the information needed to launch EC2 instances. An AMI is the image artifact, not the managed service that automates its creation and testing."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Launch Wizard",
          "en": "AWS Launch Wizard"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Launch Wizard orienta o dimensionamento, a configuração e a implantação de aplicações empresariais na AWS. Ele não é uma ferramenta de pipeline para criar e testar imagens EC2 personalizadas.",
          "en": "AWS Launch Wizard guides the sizing, configuration, and deployment of enterprise applications on AWS. It is not a pipeline tool for building and testing custom EC2 images."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O EC2 Image Builder automatiza a criação, a validação, a distribuição e o gerenciamento de imagens de máquina personalizadas para uso com EC2. Elastic Beanstalk implanta aplicações, uma Amazon Machine Image é o artefato de imagem e Launch Wizard orienta implantações de aplicações empresariais.",
      "en": "EC2 Image Builder automates the creation, validation, distribution, and management of custom machine images for use with EC2. Elastic Beanstalk deploys applications, an Amazon Machine Image is the image artifact, and Launch Wizard guides deployments of enterprise applications."
    }
  },
  {
    "id": 123,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Uma aplicação monolítica será dividida em microsserviços para ganhar flexibilidade. Qual prática de arquitetura está sendo aplicada?",
      "en": "A monolithic application will be split into microservices for greater flexibility. Which architectural practice is being applied?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Implantar em várias regiões",
          "en": "Deploy across multiple Regions"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Implantar em várias regiões distribui recursos por regiões geográficas da AWS para melhorar disponibilidade, alcance ou recuperação de desastres. Isso não é o que caracteriza a divisão de um monólito em serviços independentes.",
          "en": "Deploying across multiple AWS Regions distributes resources geographically to improve availability, reach, or disaster recovery. That is not what characterizes splitting a monolith into independent services."
        }
      },
      {
        "title": {
          "pt-BR": "Integrar testes funcionais",
          "en": "Integrar testes funcionais"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Testes funcionais verificam se uma aplicação atende aos comportamentos e requisitos esperados. Eles ajudam a validar software, mas não reduzem por si sós as dependências entre seus componentes.",
          "en": "Functional tests verify that an application meets expected behaviors and requirements. They help validate software but do not by themselves reduce dependencies between its components."
        }
      },
      {
        "title": {
          "pt-BR": "Implementar dependências fracamente acopladas",
          "en": "Implement loosely coupled dependencies"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Dependências fracamente acopladas permitem que componentes se comuniquem por interfaces bem definidas sem depender dos detalhes internos uns dos outros. A decomposição em microsserviços aplica essa prática para que os serviços possam mudar e escalar com mais autonomia.",
          "en": "Loosely coupled dependencies let components communicate through well-defined interfaces without relying on one another's internal details. Decomposing an application into microservices applies this practice so services can change and scale more independently."
        }
      },
      {
        "title": {
          "pt-BR": "Automatizar a implantação",
          "en": "Automate deployments"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Automatizar implantações usa ferramentas e pipelines para publicar mudanças de software de forma repetível. Isso melhora o processo de entrega, mas não descreve a separação de responsabilidades do monólito em microsserviços.",
          "en": "Automating deployments uses tools and pipelines to release software changes repeatably. This improves the delivery process but does not describe separating a monolith's responsibilities into microservices."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Dividir um monólito em microsserviços reduz dependências rígidas entre componentes e permite que eles evoluam e sejam implantados com maior independência. Implantação em várias regiões, testes funcionais e automação podem ser práticas úteis, mas não descrevem essa mudança de acoplamento arquitetural.",
      "en": "Splitting a monolith into microservices reduces tight dependencies between components and lets them evolve and deploy more independently. Multi-Region deployment, functional testing, and automation can all be useful practices, but they do not describe this architectural change in coupling."
    }
  },
  {
    "id": 124,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "AWS Cloud Adoption Framework",
      "en": "AWS Cloud Adoption Framework"
    },
    "description": {
      "pt-BR": "Na jornada AWS CAF, em qual fase se identificam lacunas de capacidade por meio das perspectivas CAF?",
      "en": "In the AWS CAF journey, during which phase are capability gaps identified using the CAF perspectives?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Envision (Visualizar)",
          "en": "Envision"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Envision define e comunica a direção da transformação, conectando objetivos de negócio a resultados mensuráveis. A identificação de lacunas de capacidade por perspectiva é feita na fase Align.",
          "en": "Envision defines and communicates the direction of transformation by linking business objectives to measurable outcomes. Identifying capability gaps across the perspectives takes place in Align."
        }
      },
      {
        "title": {
          "pt-BR": "Scale (Escalar)",
          "en": "Scale"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Scale amplia iniciativas bem-sucedidas e os benefícios da transformação em toda a organização. Essa expansão vem depois da avaliação e do alinhamento das capacidades.",
          "en": "Scale expands successful initiatives and transformation benefits across the organization. This expansion follows the assessment and alignment of capabilities."
        }
      },
      {
        "title": {
          "pt-BR": "Launch (Lançar)",
          "en": "Launch"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Launch inicia ações para acelerar projetos-piloto e gerar valor de negócio. Não é a fase de avaliação organizacional que identifica lacunas de capacidade entre as perspectivas CAF.",
          "en": "Launch starts actions to accelerate pilot projects and deliver business value. It is not the organizational assessment phase that identifies capability gaps across the CAF perspectives."
        }
      },
      {
        "title": {
          "pt-BR": "Align (Alinhar)",
          "en": "Align"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Align avalia lacunas de capacidade, interdependências e prontidão organizacional nas perspectivas do AWS CAF. Essa análise ajuda a definir ações para alinhar a organização aos objetivos de transformação.",
          "en": "Align assesses capability gaps, interdependencies, and organizational readiness across the AWS CAF perspectives. This analysis helps define actions to align the organization with its transformation objectives."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Na fase Align da jornada AWS Cloud Adoption Framework (CAF), a organização avalia sua prontidão e identifica lacunas de capacidade usando as perspectivas do framework. Envision define objetivos e resultados, enquanto Launch e Scale se concentram em iniciar e expandir iniciativas de transformação.",
      "en": "In the Align phase of the AWS Cloud Adoption Framework (CAF) journey, an organization assesses its readiness and identifies capability gaps using the framework's perspectives. Envision defines objectives and outcomes, while Launch and Scale focus on starting and expanding transformation initiatives."
    }
  },
  {
    "id": 125,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Modelo de responsabilidade compartilhada",
      "en": "Shared responsibility model"
    },
    "description": {
      "pt-BR": "Quais são duas responsabilidades do cliente no modelo de responsabilidade compartilhada AWS?",
      "en": "What are two customer responsibilities under the AWS shared responsibility model?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": true,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Aplicar patches ao Amazon DynamoDB",
          "en": "Patch Amazon DynamoDB"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon DynamoDB é um serviço de banco de dados gerenciado; a AWS cuida da infraestrutura subjacente e da aplicação de patches no serviço. O cliente administra os dados e configurações, mas não aplica patches aos servidores do DynamoDB.",
          "en": "Amazon DynamoDB is a managed database service; AWS handles the underlying infrastructure and service patching. Customers manage their data and configuration, but do not patch DynamoDB servers."
        }
      },
      {
        "title": {
          "pt-BR": "Classificar os ativos e dados da empresa",
          "en": "Classify company assets and data"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Classificar ativos e dados, definir sua sensibilidade e determinar controles apropriados são responsabilidades do cliente. A AWS protege a infraestrutura da nuvem, mas o cliente decide como seus dados devem ser tratados.",
          "en": "Classifying assets and data, determining their sensitivity, and choosing appropriate controls are customer responsibilities. AWS secures the infrastructure of the cloud, but customers decide how their data should be handled."
        }
      },
      {
        "title": {
          "pt-BR": "Configurar Security Groups",
          "en": "Configure Security Groups"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Security Groups são firewalls virtuais associados a recursos, como instâncias EC2, e suas regras são configuradas pelo cliente para controlar tráfego permitido. Essa configuração de segurança no ambiente AWS é responsabilidade do cliente.",
          "en": "Security groups are virtual firewalls associated with resources such as EC2 instances, and customers configure their rules to control allowed traffic. This security configuration in the AWS environment is the customer's responsibility."
        }
      },
      {
        "title": {
          "pt-BR": "Selecionar instâncias EC2 para executar Lambda",
          "en": "Select EC2 instances to run Lambda"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Lambda executa código em uma infraestrutura gerenciada sem exigir que o cliente escolha instâncias EC2 para hospedar cada função. Selecionar e manter essa infraestrutura não é uma tarefa do cliente ao usar Lambda.",
          "en": "AWS Lambda runs code on managed infrastructure without requiring customers to choose EC2 instances to host each function. Selecting and maintaining that infrastructure is not a customer task when using Lambda."
        }
      },
      {
        "title": {
          "pt-BR": "Escolher AZ de cada bucket S3",
          "en": "Choose an Availability Zone for each S3 bucket"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon S3 armazena objetos e gerencia automaticamente a distribuição dos dados entre zonas de disponibilidade dentro de uma região. Os buckets não são criados escolhendo manualmente uma zona de disponibilidade específica.",
          "en": "Amazon S3 stores objects and automatically manages data distribution across Availability Zones within a Region. Buckets are not created by manually selecting a specific Availability Zone."
        }
      }
    ],
    "explanation": {
      "pt-BR": "No modelo de responsabilidade compartilhada, o cliente classifica seus dados e configura controles de rede como Security Groups; a AWS opera a infraestrutura e os serviços gerenciados, como DynamoDB. Lambda não exige que o cliente selecione instâncias EC2, e o Amazon S3 gerencia a redundância entre zonas de disponibilidade sem escolha de zona por bucket.",
      "en": "Under the shared responsibility model, the customer classifies its data and configures network controls such as security groups, while AWS operates the infrastructure and managed services such as DynamoDB. Lambda does not require customers to select EC2 instances, and Amazon S3 manages redundancy across Availability Zones without a per-bucket zone selection."
    }
  },
  {
    "id": 126,
    "domain": "cloud-concepts",
    "title": {
      "pt-BR": "AWS Cloud Adoption Framework",
      "en": "AWS Cloud Adoption Framework"
    },
    "description": {
      "pt-BR": "Qual capacidade do AWS CAF pertence à perspectiva People (Pessoas)?",
      "en": "Which AWS CAF capability belongs to the People perspective?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Parceria estratégica",
          "en": "Strategic partnership"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Parceria estratégica trata do alinhamento e da colaboração com parceiros para apoiar resultados de negócio. Não é a capacidade de desenvolver fluência e competências de nuvem entre os profissionais.",
          "en": "Strategic partnership concerns aligning and collaborating with partners to support business outcomes. It is not the capability for developing cloud fluency and skills among personnel."
        }
      },
      {
        "title": {
          "pt-BR": "Fluência na nuvem",
          "en": "Cloud fluency"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Fluência na nuvem desenvolve a compreensão, as habilidades e a cultura necessárias para trabalhar efetivamente com tecnologias e práticas de nuvem. Por isso, essa capacidade pertence à perspectiva People.",
          "en": "Cloud fluency develops the understanding, skills, and culture needed to work effectively with cloud technologies and practices. This capability therefore belongs to the People perspective."
        }
      },
      {
        "title": {
          "pt-BR": "Arquitetura de dados",
          "en": "Data architecture"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Arquitetura de dados define como os dados são estruturados, integrados e governados para atender às necessidades da organização. É uma capacidade de tecnologia, não da perspectiva voltada a pessoas e competências.",
          "en": "Data architecture defines how data is structured, integrated, and governed to meet organizational needs. It is a technology capability, not one in the people-and-skills perspective."
        }
      },
      {
        "title": {
          "pt-BR": "Gestão de eventos",
          "en": "Event management"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Gestão de eventos organiza a identificação, a resposta e o acompanhamento de eventos operacionais. Essa atividade se relaciona à operação de serviços, não ao desenvolvimento da fluência em nuvem das equipes.",
          "en": "Event management organizes the identification, response, and tracking of operational events. This activity relates to service operations, not to building cloud fluency across teams."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Fluência na nuvem pertence à perspectiva People do AWS CAF, pois desenvolve conhecimento e habilidades para que as equipes adotem e usem a nuvem com eficácia. Parceria estratégica, arquitetura de dados e gestão de eventos são capacidades associadas a outras perspectivas ou áreas.",
      "en": "Cloud fluency belongs to the People perspective of the AWS CAF because it develops the knowledge and skills teams need to adopt and use the cloud effectively. Strategic partnership, data architecture, and event management are capabilities associated with other perspectives or areas."
    }
  },
  {
    "id": 127,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Qual serviço gerenciado AWS é projetado para atividades ETL (extração, transformação e carregamento)?",
      "en": "Which managed AWS service is designed for ETL (extract, transform, load) activities?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon Athena",
          "en": "Amazon Athena"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Athena é um serviço de consultas interativas que analisa dados no Amazon S3 usando SQL, sem exigir a criação de um servidor de banco de dados. Ele consulta dados existentes, mas não é o serviço ETL gerenciado pedido.",
          "en": "Amazon Athena is an interactive query service that analyzes data in Amazon S3 using SQL without requiring a database server. It queries existing data but is not the requested managed ETL service."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Snowball Edge",
          "en": "AWS Snowball Edge"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Snowball Edge é um dispositivo e serviço para transferir grandes volumes de dados e executar processamento em ambientes de borda ou desconectados. Não é a plataforma gerenciada de pipelines ETL para integração de dados.",
          "en": "AWS Snowball Edge is a device and service for transferring large volumes of data and running processing in edge or disconnected environments. It is not the managed ETL pipeline platform for data integration."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Glue",
          "en": "AWS Glue"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Glue é um serviço gerenciado de integração de dados que oferece recursos para catalogar, preparar e transformar dados em trabalhos de extração, transformação e carregamento (ETL). Ele foi projetado para esse tipo de fluxo de dados.",
          "en": "AWS Glue is a managed data integration service with capabilities for cataloging, preparing, and transforming data in extract, transform, and load (ETL) jobs. It is designed for this kind of data workflow."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon S3",
          "en": "Amazon S3"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Simple Storage Service (S3) é um serviço de armazenamento de objetos escalável e durável. Ele pode ser a origem ou o destino de um pipeline ETL, mas não realiza sozinho as transformações gerenciadas do Glue.",
          "en": "Amazon Simple Storage Service (S3) is a scalable, durable object storage service. It can be a source or destination for an ETL pipeline, but it does not perform Glue's managed transformations by itself."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Glue é um serviço de integração de dados gerenciado que permite descobrir, preparar, transformar e carregar dados por meio de pipelines ETL (extração, transformação e carregamento). Athena consulta dados, Snowball Edge auxilia transferências e processamento em borda, e S3 é armazenamento de objetos.",
      "en": "AWS Glue is a managed data integration service for discovering, preparing, transforming, and loading data through extract, transform, and load (ETL) pipelines. Athena queries data, Snowball Edge supports data transfer and edge processing, and S3 is object storage."
    }
  },
  {
    "id": 128,
    "domain": "security-compliance",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Como gerenciar de modo centralizado as regras dos Security Groups em várias contas de uma organização AWS?",
      "en": "How can Security Group rules be centrally managed across multiple accounts in an AWS organization?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon Detective",
          "en": "Amazon Detective"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Detective analisa dados de segurança para ajudar a investigar e visualizar possíveis causas de descobertas ou atividades suspeitas. Ele não distribui políticas de Security Groups entre contas.",
          "en": "Amazon Detective analyzes security data to help investigate and visualize possible causes of findings or suspicious activity. It does not distribute security group policies across accounts."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Firewall Manager",
          "en": "AWS Firewall Manager"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Firewall Manager permite administrar políticas de firewall de forma centralizada para várias contas e recursos da AWS Organizations, incluindo regras de Security Groups. Isso corresponde ao gerenciamento organizacional solicitado.",
          "en": "AWS Firewall Manager lets administrators centrally manage firewall policies across multiple AWS Organizations accounts and resources, including security group rules. This matches the requested organization-wide management."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon GuardDuty",
          "en": "Amazon GuardDuty"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon GuardDuty monitora fontes de dados e sinais para detectar ameaças e atividades potencialmente maliciosas nas contas AWS. Ele gera descobertas de segurança, mas não gerencia regras de Security Groups.",
          "en": "Amazon GuardDuty monitors data sources and signals to detect threats and potentially malicious activity in AWS accounts. It generates security findings but does not manage security group rules."
        }
      },
      {
        "title": {
          "pt-BR": "AWS WAF",
          "en": "AWS WAF"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Web Application Firewall (WAF) ajuda a proteger aplicações web filtrando solicitações HTTP e HTTPS conforme regras configuradas. Ele protege tráfego de aplicações web, não centraliza as regras de Security Groups da organização.",
          "en": "AWS Web Application Firewall (WAF) helps protect web applications by filtering HTTP and HTTPS requests according to configured rules. It protects web application traffic rather than centrally managing an organization's security group rules."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Firewall Manager centraliza a criação e aplicação de políticas de Security Groups em contas e recursos da organização AWS. Detective investiga atividades suspeitas, GuardDuty detecta ameaças e AWS WAF filtra solicitações web, sem administrar centralmente regras de Security Groups.",
      "en": "AWS Firewall Manager centralizes the creation and enforcement of security group policies across accounts and resources in an AWS organization. Detective investigates suspicious activity, GuardDuty detects threats, and AWS WAF filters web requests rather than centrally managing security group rules."
    }
  },
  {
    "id": 129,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Uma aplicação muito exigente em hardware precisa ser acessada por alunos com laptops simples. Qual serviço permite fornecer o aplicativo remotamente?",
      "en": "A resource-intensive application must be accessed by students using basic laptops. Which service can deliver the application remotely?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS AppSync",
          "en": "AWS AppSync"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS AppSync é um serviço gerenciado para criar APIs GraphQL e sincronizar dados entre aplicações e fontes de dados. Ele não transmite aplicações de desktop com uso intensivo de recursos para os usuários.",
          "en": "AWS AppSync is a managed service for building GraphQL APIs and synchronizing data between applications and data sources. It does not stream resource-intensive desktop applications to users."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon AppStream 2.0",
          "en": "Amazon AppStream 2.0"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Amazon AppStream 2.0 entrega aplicações de desktop por streaming a partir da AWS, onde elas são executadas e renderizadas em infraestrutura gerenciada. Os alunos podem interagir com a aplicação sem que seus laptops simples precisem executar a carga localmente.",
          "en": "Amazon AppStream 2.0 streams desktop applications from AWS, where they run and are rendered on managed infrastructure. Students can use the application without their basic laptops having to run the workload locally."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon WorkLink",
          "en": "Amazon WorkLink"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon WorkLink fornece acesso seguro, a partir de dispositivos móveis, a sites e aplicações internas da empresa. Ele não foi projetado para transmitir aplicações de desktop exigentes a laptops.",
          "en": "Amazon WorkLink provides secure access to internal company websites and applications from mobile devices. It is not designed to stream demanding desktop applications to laptops."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Elastic Beanstalk",
          "en": "AWS Elastic Beanstalk"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Elastic Beanstalk facilita a implantação e a escalabilidade de aplicações web na AWS. Ele hospeda aplicações web, mas não oferece o streaming de aplicações de desktop do AppStream 2.0.",
          "en": "AWS Elastic Beanstalk simplifies deploying and scaling web applications on AWS. It hosts web applications but does not provide AppStream 2.0's desktop application streaming."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Amazon AppStream 2.0 transmite aplicações de desktop aos usuários, enquanto a aplicação é executada em recursos gerenciados na AWS; assim, os laptops precisam apenas de um navegador compatível. AppSync cria APIs, WorkLink dá acesso móvel a sites internos e Elastic Beanstalk implanta aplicações web.",
      "en": "Amazon AppStream 2.0 streams desktop applications to users while the applications run on AWS-managed resources, so laptops need only a supported browser. AppSync builds APIs, WorkLink provides mobile access to internal websites, and Elastic Beanstalk deploys web applications."
    }
  },
  {
    "id": 130,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Qual serviço é apropriado para armazenar e analisar grandes quantidades de eventos de séries temporais?",
      "en": "Which service is suitable for storing and analyzing large volumes of time-series data?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon Timestream",
          "en": "Amazon Timestream"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Amazon Timestream é um banco de dados de séries temporais gerenciado para coletar, armazenar e analisar dados temporais em grande escala. Seus recursos de consultas e armazenamento são adequados a eventos com carimbo de data e hora.",
          "en": "Amazon Timestream is a managed time-series database for collecting, storing, and analyzing time-based data at scale. Its storage and query capabilities suit timestamped events."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon DocumentDB",
          "en": "Amazon DocumentDB"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon DocumentDB é um banco de dados de documentos gerenciado, compatível com cargas de trabalho do MongoDB. Seu modelo de documentos não é especializado em ingestão e análise de séries temporais em larga escala.",
          "en": "Amazon DocumentDB is a managed document database compatible with MongoDB workloads. Its document model is not specialized for large-scale time-series ingestion and analysis."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Neptune",
          "en": "Amazon Neptune"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Neptune é um banco de dados gerenciado otimizado para dados em grafo e consultas sobre relações entre entidades. Ele não é destinado a armazenar e analisar grandes fluxos de eventos temporais.",
          "en": "Amazon Neptune is a managed database optimized for graph data and queries over relationships between entities. It is not intended for storing and analyzing large streams of time-series events."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon Forecast",
          "en": "Amazon Forecast"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Forecast é um serviço de previsão de séries temporais que usa dados históricos para estimar valores futuros. Ele produz previsões, mas não é o armazenamento gerenciado de séries temporais para grandes volumes de eventos.",
          "en": "Amazon Forecast is a time-series forecasting service that uses historical data to estimate future values. It produces forecasts but is not the managed time-series store for large volumes of events."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Amazon Timestream é um banco de dados gerenciado de séries temporais, feito para armazenar e consultar grandes volumes de dados temporais com escalabilidade. DocumentDB atende documentos, Neptune atende grafos e Forecast cria previsões a partir de dados temporais, mas não é o banco de séries temporais pedido.",
      "en": "Amazon Timestream is a managed time-series database built to store and query large volumes of time-based data at scale. DocumentDB serves document workloads, Neptune serves graph workloads, and Forecast creates predictions from time-series data rather than providing the requested time-series database."
    }
  },
  {
    "id": 131,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Rede e infraestrutura global",
      "en": "Networking and global infrastructure"
    },
    "description": {
      "pt-BR": "Uma EC2 numa sub-rede privada precisa baixar atualizações da internet sem aceitar conexões iniciadas pela internet. Qual serviço usar?",
      "en": "An EC2 instance in a private subnet needs to download updates from the internet without accepting connections initiated from the internet. Which service should be used?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "NAT Gateway",
          "en": "NAT Gateway"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Um NAT Gateway faz tradução de endereços de rede para permitir que recursos em uma sub-rede privada iniciem conexões com destinos externos, como servidores de atualização. O tráfego de resposta é permitido, mas conexões não solicitadas da internet não são iniciadas diretamente para essas instâncias.",
          "en": "A network address translation (NAT) gateway translates network addresses so resources in a private subnet can initiate connections to external destinations such as update servers. Return traffic is allowed, but unsolicited internet connections cannot be initiated directly to those instances."
        }
      },
      {
        "title": {
          "pt-BR": "VPC Endpoint",
          "en": "VPC Endpoint"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Um endpoint de nuvem privada virtual (VPC) fornece conectividade privada entre uma VPC e serviços ou recursos compatíveis, como serviços da AWS. Ele não oferece acesso geral a destinos arbitrários na internet para baixar atualizações.",
          "en": "A virtual private cloud (VPC) endpoint provides private connectivity between a VPC and supported services or resources, such as AWS services. It does not provide general access to arbitrary internet destinations for downloading updates."
        }
      },
      {
        "title": {
          "pt-BR": "VPC Peering",
          "en": "VPC Peering"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O VPC Peering cria uma conexão de rede privada entre duas VPCs para permitir roteamento entre seus recursos, sujeito às regras de rede. Ele não atua como caminho de saída para a internet pública.",
          "en": "VPC peering creates a private network connection between two VPCs so their resources can route traffic to one another, subject to network rules. It does not act as an egress path to the public internet."
        }
      },
      {
        "title": {
          "pt-BR": "AWS PrivateLink",
          "en": "AWS PrivateLink"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS PrivateLink permite acessar serviços de forma privada por endpoints de interface, sem expor o tráfego à internet pública. Ele conecta consumidores a serviços específicos, não habilita acesso geral de saída à internet.",
          "en": "AWS PrivateLink provides private access to services through interface endpoints without exposing traffic to the public internet. It connects consumers to specific services rather than enabling general outbound internet access."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Um NAT Gateway permite que instâncias em uma sub-rede privada iniciem conexões de saída com a internet, sem aceitar conexões de entrada iniciadas na internet. Endpoints VPC fornecem acesso privado a serviços específicos, enquanto peering e PrivateLink conectam VPCs ou serviços privados, não oferecem saída geral para a internet.",
      "en": "A NAT Gateway lets instances in a private subnet initiate outbound connections to the internet without accepting inbound connections initiated from the internet. VPC endpoints provide private access to specific services, while peering and PrivateLink connect VPCs or private services rather than providing general internet egress."
    }
  },
  {
    "id": 132,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Armazenamento AWS",
      "en": "AWS storage"
    },
    "description": {
      "pt-BR": "Qual serviço AWS provê armazenamento gerenciado de arquivos acessível por protocolo SMB?",
      "en": "Which AWS service provides managed file storage accessible over the SMB protocol?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Amazon EFS",
          "en": "Amazon EFS"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Elastic File System (EFS) fornece armazenamento de arquivos elástico para workloads Linux que acessam o sistema de arquivos usando Network File System (NFS). Ele não oferece o compartilhamento SMB para clientes Windows descrito.",
          "en": "Amazon Elastic File System (EFS) provides elastic file storage for Linux workloads that access the file system using Network File System (NFS). It does not provide the SMB shares for Windows clients described here."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon FSx for Windows File Server",
          "en": "Amazon FSx for Windows File Server"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O Amazon FSx for Windows File Server fornece compartilhamentos de arquivos Windows gerenciados e compatíveis com o protocolo Server Message Block (SMB). Os clientes podem acessá-los como compartilhamentos de rede, atendendo ao requisito.",
          "en": "Amazon FSx for Windows File Server provides managed Windows file shares that support the Server Message Block (SMB) protocol. Clients can access them as network shares, meeting the requirement."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon EBS",
          "en": "Amazon EBS"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Elastic Block Store (EBS) fornece volumes de armazenamento em blocos que são anexados a instâncias EC2. Um volume de blocos não é, por si só, um compartilhamento de arquivos gerenciado acessível por SMB.",
          "en": "Amazon Elastic Block Store (EBS) provides block storage volumes that attach to EC2 instances. A block volume is not, by itself, a managed file share accessible over SMB."
        }
      },
      {
        "title": {
          "pt-BR": "Amazon S3",
          "en": "Amazon S3"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O Amazon Simple Storage Service (S3) armazena objetos em buckets e os disponibiliza por APIs e interfaces compatíveis. Esse modelo de armazenamento de objetos não fornece um sistema de arquivos SMB nativo como o FSx for Windows File Server.",
          "en": "Amazon Simple Storage Service (S3) stores objects in buckets and makes them available through APIs and compatible interfaces. This object storage model does not provide a native SMB file system like FSx for Windows File Server."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O Amazon FSx for Windows File Server oferece armazenamento de arquivos totalmente gerenciado e acessível por clientes Windows usando o protocolo Server Message Block (SMB). EFS usa Network File System (NFS), EBS fornece volumes de blocos e S3 armazena objetos, não compartilhamentos de arquivos SMB gerenciados.",
      "en": "Amazon FSx for Windows File Server provides fully managed file storage accessible to Windows clients over the Server Message Block (SMB) protocol. EFS uses Network File System (NFS), EBS provides block volumes, and S3 stores objects rather than managed SMB file shares."
    }
  },
  {
    "id": 133,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "Serviços e arquitetura AWS",
      "en": "AWS services and architecture"
    },
    "description": {
      "pt-BR": "Para verificar tanto saúde geral dos serviços AWS quanto eventos que afetam especificamente a conta, quais ferramentas usar? (Duas.)",
      "en": "To check both overall AWS service health and events affecting a specific account, which tools should be used? (Select two.)"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": true,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "AWS Trusted Advisor",
          "en": "AWS Trusted Advisor"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Trusted Advisor avalia o ambiente AWS segundo práticas recomendadas em áreas como custo, segurança, desempenho e limites de serviço. Ele não é o painel para verificar saúde geral dos serviços nem eventos específicos da conta.",
          "en": "AWS Trusted Advisor evaluates an AWS environment against best practices in areas such as cost, security, performance, and service limits. It is not the dashboard for checking overall service health or account-specific events."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Service Catalog",
          "en": "AWS Service Catalog"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Service Catalog permite criar, organizar e controlar o acesso a produtos de infraestrutura aprovados para uso na AWS. Ele não monitora a saúde dos serviços nem comunica eventos operacionais da conta.",
          "en": "AWS Service Catalog lets organizations create, organize, and control access to approved infrastructure products for use on AWS. It does not monitor service health or report account operational events."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Service Health Dashboard",
          "en": "AWS Service Health Dashboard"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Service Health Dashboard exibe a disponibilidade e os eventos que afetam serviços e regiões da AWS de forma geral. Ele permite verificar a saúde ampla da infraestrutura da AWS.",
          "en": "The AWS Service Health Dashboard displays availability and events affecting AWS services and Regions overall. It provides a way to check the broad health of AWS infrastructure."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Systems Manager",
          "en": "AWS Systems Manager"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS Systems Manager ajuda a operar e automatizar recursos, incluindo gerenciamento de instâncias, parâmetros e operações. Não é o painel que resume incidentes gerais da AWS nem impactos de serviço personalizados à conta.",
          "en": "AWS Systems Manager helps operate and automate resources, including instance management, parameters, and operations. It is not the dashboard that summarizes general AWS incidents or account-specific service impacts."
        }
      },
      {
        "title": {
          "pt-BR": "AWS Personal Health Dashboard",
          "en": "AWS Personal Health Dashboard"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "O AWS Personal Health Dashboard apresenta alertas e eventos da AWS que podem afetar os serviços e recursos usados por uma conta específica. Ele complementa o painel de saúde geral com informações personalizadas à conta.",
          "en": "The AWS Personal Health Dashboard presents AWS alerts and events that may affect the services and resources used by a specific account. It complements the overall health dashboard with account-specific information."
        }
      }
    ],
    "explanation": {
      "pt-BR": "O AWS Service Health Dashboard apresenta o estado geral dos serviços e regiões da AWS; o AWS Personal Health Dashboard mostra eventos e notificações relevantes para os serviços e recursos específicos da conta. Usadas em conjunto, as duas ferramentas distinguem incidentes gerais de impactos personalizados na conta.",
      "en": "The AWS Service Health Dashboard shows the overall status of AWS services and Regions; the AWS Personal Health Dashboard shows events and notifications relevant to the specific account's services and resources. Together, they distinguish general incidents from account-specific impacts."
    }
  },
  {
    "id": 134,
    "domain": "cloud-technology-services",
    "title": {
      "pt-BR": "AWS Well-Architected e resiliência",
      "en": "Well-Architected and resilience"
    },
    "description": {
      "pt-BR": "Uma instância de banco de dados RDS crítica deve ter alta disponibilidade e recuperação rápida (menos de cinco minutos). Qual solução?",
      "en": "A critical RDS database instance requires high availability and fast recovery (less than five minutes). Which solution should be used?"
    },
    "question": {
      "pt-BR": "",
      "en": ""
    },
    "multiple": false,
    "answered": false,
    "correct": false,
    "alternatives": [
      {
        "title": {
          "pt-BR": "Implantação RDS Multi-AZ",
          "en": "RDS Multi-AZ deployment"
        },
        "correct": true,
        "explanation": {
          "pt-BR": "Uma implantação Amazon Relational Database Service (RDS) Multi-AZ mantém uma réplica em espera sincronizada em outra zona de disponibilidade e faz failover automático quando necessário. O failover costuma ocorrer em minutos, oferecendo alta disponibilidade e recuperação compatíveis com o requisito.",
          "en": "An Amazon Relational Database Service (RDS) Multi-AZ deployment maintains a synchronized standby in another Availability Zone and automatically fails over when needed. Failover typically occurs within minutes, providing high availability and recovery consistent with the requirement."
        }
      },
      {
        "title": {
          "pt-BR": "Snapshots frequentes no S3",
          "en": "Frequent snapshots to S3"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Snapshots do RDS são cópias de backup pontuais que podem ser usadas para restaurar um banco de dados. Restaurar um snapshot envolve criar ou recuperar uma instância e não proporciona o failover automático e rápido de uma implantação Multi-AZ.",
          "en": "RDS snapshots are point-in-time backups that can be used to restore a database. Restoring a snapshot involves creating or recovering an instance and does not provide the automatic, fast failover of a Multi-AZ deployment."
        }
      },
      {
        "title": {
          "pt-BR": "Réplica de leitura isolada",
          "en": "A standalone read replica"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "Uma réplica de leitura recebe atualizações do banco de origem e pode atender consultas de leitura para aumentar a capacidade de leitura. Ela não substitui automaticamente a instância primária em todos os cenários como uma implantação Multi-AZ.",
          "en": "A read replica receives updates from a source database and can serve read queries to increase read capacity. It does not automatically replace the primary instance in all scenarios like a Multi-AZ deployment."
        }
      },
      {
        "title": {
          "pt-BR": "Template CloudFormation",
          "en": "CloudFormation template"
        },
        "correct": false,
        "explanation": {
          "pt-BR": "O AWS CloudFormation usa templates para provisionar e gerenciar infraestrutura como código. Um template pode descrever recursos de banco de dados, mas não fornece por si só redundância de banco nem failover rápido.",
          "en": "AWS CloudFormation uses templates to provision and manage infrastructure as code. A template can describe database resources, but does not itself provide database redundancy or fast failover."
        }
      }
    ],
    "explanation": {
      "pt-BR": "Uma implantação Amazon RDS Multi-AZ mantém uma instância em espera sincronizada em outra zona de disponibilidade e oferece failover automático se a instância primária falhar, normalmente em minutos. Snapshots são usados para restauração, réplicas de leitura são voltadas principalmente à escala de leitura, e um template CloudFormation apenas provisiona recursos.",
      "en": "An Amazon RDS Multi-AZ deployment maintains a synchronized standby in another Availability Zone and provides automatic failover if the primary instance fails, typically within minutes. Snapshots are used for restoration, read replicas primarily scale reads, and a CloudFormation template only provisions resources."
    }
  }
];
