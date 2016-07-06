---
layout: post
title:  "A Gentle Introduction to Elasticsearch"
date:   2016-06-26 19:30:00
categories:
tags: 
image: /assets/images/books_background.jpg
---


###What is Indexing and Why do we need it?

Data is stored on disk as blocks of data. These blocks are accessed in their entirety, making them atomic reads and writes. The structure of these blocks of data is similar to that of a linked list - that contains a block of data and a pointer to the next data block. To find a piece of information, we would have to linearly search through the data which would be expensive, given that it is unsorted.

Indexing is the process of tagging or associating information with a document or a file, so that the process of search and retrieval could be faster. Therefore, creating an index on the data would significantly speed up the process of search and retrieval.



###Elasticsearch

Elasticsearch is an open-source, distributed search and analytics engine, built on top of Apache Lucene. It is able to achieve fast search responses because, it searches an index rather than searching the text directly. This is similar to retrieving pages in a book related to a keyword, by scanning the index at the back of a book, as opposed to searching every word on every page of the book. This type of index is called an Inverted Index.

Apache Lucene is a high-performance full-text search and information retrieval library. Although it is one of the most robust search libraries, it needs the support of a programming language such as Java or Python, to be integrated into an application. Elasticsearch hides this complexity by providing a convenient RESTful API to interact with the data.



###Terms in Elasticsearch

 * Node : An instance that is running Elasticsearch.

 * Cluster : A cluster consists of two or more nodes. Each cluster has a single master node, which is automatically elected by the cluster and multiple slave nodes. A new master is automatically elected in case of failure.

 To draw an analogy between Elasticsearch and RDBMS

    RDBMS => Database => Table => Rows & Columns

    ElasticSearch => Index => Type => Documents & Properties

 * Index : The index is the heart of Elasticsearch. Each index contains one or more types and is a logical namespace which maps to one or more primary shards.

 * Type : Each type contains a list of documents. A mapping in the type defines how each field in the document is analyzed.

 * Document : A document in Elasticsearch is a JSON document consisting of key-value pairs. Each document has a type and is stored in an index, and  can be uniquely identified by an id.

 * Field : Fields are the key-value pairs present in the document. The values can either be a scalar such as a string, integer, date or a nested JSON structure with sub key-value pairs. 

 * Shard : A shard is a low-level worker unit which is managed by Elasticsearch. Elasticsearch distributes these shards amongst all nodes in the cluster and can move shards from one node to another in the case of node failure or the addition of new nodes. 

 There are two types of Shards - Primary & Replica Shards. 
 Primary Shard : When a document is indexed it is first stored on the primary shard, then on all replicas of the primary shard. By default, an index has 5 primary shards, but this can be scaled to fewer or more primary shards depending on the application. 
 Replica Shard : Each primary shard can have zero or more replicas. A replica is a copy of the primary shard, and has two purposes: 1) increase failover: a replica shard can be promoted to a primary shard if the primary fails. 2) increase performance: get and search requests can be handled by primary or replica shards.



###ELK Stack

The Elastic Stack is an end-to-end solution for log management, indexing and visualization of data. The ELK Stack consists of Elasticsearch, Logstash and Kibana, three independent open source projects that can ingest data from any source, any format and search, analyze, and visualize it in real time.

Logstash is a pipeline for ingestion and processing of logs. It can handle a variety of logs such as - system logs, web server logs, application logs etc. Data from multiple sources can be normalized via Logstash, rather than the traditional ETL(Extract - Transform - Load) approach, indexed using Elasticsearch and visualized using Kibana as a dashboard.



###Elasticsearch - Hadoop

Elasticsearch for Apache Hadoop (ES-Hadoop) acts as a two-way connector, that connects the real-time search and analytics capability of Elasticsearch to the Hadoop ecosystem. With this native integration, ES-Hadoop allows for seamlessly moving data between Elasticsearch and HDFS. ES-Hadoop ships with security features such as HTTP authentication and support for SSL/TLS. It also works with Kibana for data visualization.



###Resources to get started

1. Elastic - https://www.elastic.co/
2. Elasticsearch: The Definitive Guide Book - https://www.elastic.co/guide/en/elasticsearch/guide/current/index.html
3. Elasticsearch API List - http://elasticsearch-api.info/  
4. Kibana - https://www.elastic.co/products/kibana
