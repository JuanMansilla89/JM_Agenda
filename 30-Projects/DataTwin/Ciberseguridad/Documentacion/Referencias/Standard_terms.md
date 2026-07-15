Schedule X – Information Security Requirements

## Organisation of Information Security
1. The Supplier must have a dedicated information security team, with governance in place through an information governance board led by C-Level executives.
2. The Supplier must establish an ISMS ("**Information Security Management System**") to evaluate risks to the security of Company Data and Confidential Information, to manage the assessment and treatment of these risks and to continually improve the Supplier's information security.

## Human Resource Security
1. The Supplier's Personnel, employed or engaged at any time to perform, and/or to supervise the performance of, the Services, must be subject to a screening process for new employees, including extensive background verification of previous employment and educational certificates, in accordance with Good Industry Practice.
2. The Supplier's Personnel, employed or engaged in accordance with Paragraph 2.1 above, must attend formal information security and data protection training, in accordance with Good Industry Practice.

## Third parties
The Supplier must ensure that no third party (that is not authorised in writing by the Company) will obtain access to any Company Data and Confidential Information.

## Data Security and Access Control
1. The Supplier must in no circumstances use Company Data and/or Confidential Information for security testing purposes.
2. The Supplier must keep Company Data and Confidential Information separate from the data of its other customers.
3. The Supplier must apply security procedures and encryption measures to data in transit and at rest, in accordance with Good Industry Practice, to guard against the loss, destruction, corruption or alteration of Company Data and/or Confidential Information in the possession or control of, or accessed by the Supplier. The Supplier must keep encryption keys confidential and secure and only available to those Personnel requiring them for the purpose of providing the Services.
4. Subject to Clause 3, the Supplier must ensure that all transfers of Company Data and Confidential Information between the Company, the Supplier and any other authorised third party are communicated over secure channels, in accordance with Good Industry Practice. The Supplier and its Personnel must not use and/or circulate unencrypted email attachments and FTP, and the Supplier must promptly inform the Company if it becomes aware of any instances of their use in the provision of the Services.
5. The Supplier will obtain the approval of the Company prior to the commencement of the provision of the Services from or to any data centre, shared environment or location.
6. Usernames and passwords supplied by the Company to any specific Personnel for the purpose of accessing any Company systems, applications or any part of its network are provided for the sole use of that specific Personnel and must not be shared or divulged to any other person.
7. The Supplier must ensure that any passwords it creates to protect access to the Company Data, Confidential Information and systems must be strong in line with Good Industry Practice and regularly changed (at least every 90 days) and maintained in such a manner that they are kept confidential and not easily predicted.
8. The Supplier must not copy, download or store the Company Data and/or Confidential Information onto any desktop, laptop, server or other device at the Supplier Premises or in the Supplier's possession other than those approved by the Company for the provision of the Services.
9. The Supplier must ensure that equipment and data storage media used to store / process the Company Data and Confidential Information are disposed of securely in accordance with Good Industry Practice.

## Physical Environment
The Supplier must take steps to protect buildings and rooms which house systems and networks supporting the Company Data and/or Confidential Information:
- with physical security measures that prevent unauthorised persons from gaining access; and
- against weather risks, fire threats, pest infestation, earthquake, flooding.

## Communications and Operations
1. The Supplier must, in accordance with Good Industry Practice, maintain appropriate physical and logical security over the network used to provide the Services and throughout its infrastructure.
2. The Supplier must ensure that it and its Personnel do not corrupt or erase the Company Data and/or Confidential Information on the Company's systems or on the network.
3. The Supplier must ensure the systems and network infrastructure used to provide Services to the Company are protected from external threats using firewalls which the Supplier must test for efficacy in accordance with Good Industry Practice. The Supplier policy concerning the firewall must be to deny traffic as a default.
4. The Supplier must install and maintain anti-virus software ("**AV Software**") and maintain up to date virus definition files in the AV Software in accordance with Good Industry Practice. The Supplier must ensure that it and its Personnel:
	- do not knowingly introduce or allow the introduction of any malware, virus, worm, trojan horse, zombie, keylogger or other form of malicious code into any information systems or networks used to provide Services to, or controlled by, the Company; and
	- take all reasonable precautions to stop any malware, virus, worm, trojan horse, zombie, keylogger or other form of malicious code from being introduced into any information systems or networks used to provide Services to, or controlled by, the Company.
5. The Supplier must not store the Company Data and/or Confidential Information on any mobile device, storage or any portable media type except as explicitly permitted by the Company, in which case the Company Data and/or Confidential Information must be encrypted in accordance with Clause 4.3.
6. The Supplier must secure any wireless network used by it for the provision of the Services in accordance with Good Industry Practice and at least to a WPA2 encryption standard and kept secure from unauthorised access. Any wireless network must be logically separate from the network containing the Company Data and/or Confidential Information. "Wireless technology" includes the IEEE standards 802.11 and all additions and amendments to that standard as may arise over the term of this agreement.
7. The Supplier must promptly create or obtain from the appropriate third party any necessary security patch(es) and promptly apply such patch(es) to the relevant application(s). The Supplier must keep records of any patches applied. For the avoidance of doubt, any software patch that is classified as critical must be applied within 72 hours of release with all other patches being applied within 14 calendar days of release.

## Systems Development
1. Where relevant for the provision of the Services, the Supplier must:
	- keep the development of application or System software separate (logical separation at the minimum) from the production environment, and ensure that production Systems are independent of any development infrastructure;
	- test all input data from client systems for validity before any action or evaluation is actioned by the application;
	- ensure that all development work undertaken, and code changes made, are application security tested by the Supplier in accordance with Good Industry Practice, using application and vulnerability testing tools before release to ensure they are not susceptible to common exploits including (without limitation) the following:
		- Injection;
		- Cross Site Scripting (XSS);
		- Broken Authentication and Session Management;
		- Insecure Direct Object References;
		- Cross-Site Request Forgery;
		- Security Misconfiguration;
		- Insecure Cryptographic Storage;
		- Failure to restrict URL Access;
		- Insufficient Transport Layer Protection; and
		- Invalidated Redirects and Forwards;
	- ensure that the application will make use of the Company's active directory services as the master repository of user accounts and to authenticate user access;
	- store and transmit any passwords:
		- provided by the Company to access Company systems; or
		- created by the Supplier to protect Company Data, Confidential Information and systems,
		in an encrypted format at all times.
	- ensure that all authentications between the user and the application are kept over HTTPS using strong cryptographic measures, in accordance with Good Industry Practice. Any publication of Company Data and Confidential Information through web pages of the site must be similarly secured using HTTPS and SSL certificates;
	- ensure that any HTTP requests are automatically redirected to the HTTPS version of the content;
	- ensure that all SSL certificates are from a trusted authority, have the right hostname and are configured to mitigate denial of service attacks. The Supplier must not use anonymous or Weak SSL ciphers or hash and SSL protocols with weaknesses;
	- not hard-code in application any usernames or passwords, or store them in cookies or temporary files;
	- ensure that all backup files and temporary files are not available over web servers. Files which should remain secure must be placed outside the realm of publicly exposed directories. Only the required system services shall be running on the servers providing the Service;
	- keep all session tokens user unique, non-predictable, resistant to reverse-engineering, or tied to a specific HTTP client instance to prevent hijacking and replay attacks. Session tokens must also expire at session termination or session idle timeout of 30 minutes. Session token algorithms must never be based on, or use as variables any user personal information (account number, name, registration details, etc.);
	- change all system error messages from the system defaults, and disable all system information banners in headers. The Supplier must not display any operating system, hardware and software versions, IP addresses, or software stack traces in any information or error messages;
	- provide remote access to the system for administration/support purposes via a secure means in accordance with Good Industry Practice;
	- change all system default usernames and passwords in production environments to strong passwords in accordance with Good Industry Practice;
	- disable all unused services, ports and development kits/tools from all internet facing servers;
	- ensure that admin interfaces are not available to the entire internet address range. All administrative interfaces for the application must be limited to a range of addresses and changed from the default directory, and file names must be renamed to names different to the default values so as to limit the opportunity for opportunistic attempts to gain administrative access;
	- encrypt all databases (irrespective of whether in production, staging or development) containing any Company Data or Confidential Information in accordance with Good Industry Practice. All backups of these databases and any backup containing the Company's information must also be encrypted;
	- encrypt all communications between any database, application and web server, using strong encryption in accordance with Good Industry Practice;
	- correctly assign permissions. Users must not be able to traverse directories or access default directories that they do not need access in order to utilise the application;
	- deploy sufficiently secure controls in accordance with Good Industry Practice, in order to protect the infrastructure using certified hardware and software. Web-facing systems must be separated from the internet in a DMZ. Firewalls must restrict both inbound / outbound connections to / from DMZ;
	- ensure that Database servers are not located in the same network segment as web servers and are never internet facing;
	- not use Company production or live data for testing or development purposes. Test data must be created specifically for these purposes;
	- not conduct testing on production servers;
	- ensure that system and all applications in use, and patch levels are maintained current on all live systems and that patches are deployed in line with the manufacturer's recommendations and within 14 days for all standard patches and within 72 hours for all patches that are deemed either by the manufacturer or the Company as being critical; and
	- ensure that the Company's applications have the capability to limit and validate the inputs by a user before they are processed by the application. Any file/object uploads into the application must be scanned for malware before processed by the application.

## Vulnerability Testing
1. The Supplier must perform vulnerability scanning and penetration testing of the service delivery environment regularly, as prescribed by Good Industry Practice, by a market-leading external organisation, no less frequently than annually and appropriately address the issues raised by the tests. The results of these tests and the subsequent action plan must be made available to the Company promptly upon request.
2. The Supplier must perform regular and periodic security tests, as prescribed by Good Industry Practice, against all application and code in order to ensure that they are secure from any new exploits or vulnerabilities (Supplier must have a vulnerability management program). Results of these security tests must be made available to the Company promptly upon request.

## Information Security Incident Management
1. The Supplier must cooperate with the Company to establish a procedure for reporting security breaches.
2. In any event, the Supplier must report all security breaches that may affect the operation of the Company or affect the confidentiality, availability or integrity of the Company Data and/or Confidential Information to the Company within 24 hours from discovery.
3. Immediately following the Supplier's notification to the Company of a security breach, the Supplier and the Company must coordinate with each other to investigate the security breach. The Supplier must cooperate with the Company in its handling of the matter, including to:
	- assist with any investigation;
	- facilitate interviews with the Supplier's Personnel and others involved in the matter; and
	- make available all relevant records, logs, files, data reporting and other materials required by the Company.
4. The Company may require a penetration test to be conducted by an insured, competent, independent third party testing firm approved by the Company at no cost to the Company, which will be scheduled within ten (10) days of the Supplier's receipt of written notice from the Company after a security breach.

## Right to audit and monitor
Upon request from the Company, the Supplier must provide relevant information on its data processing facilities, procedures, and Personnel used for the provision of the Services.

## Systems administration
The Supplier must comply with all of the Company's relevant security policies, standards and procedures.

## End of Service
  1. Upon the end of the service, Anglo American will agree with the supplier:
     1. what information must be recovered from the supplier, and
     2. the format the supplier should use to return the information
  2. The supplier must return the information to Anglo American as agreed and must securely delete (in accordance with industry best practice) any Anglo American data obtained throughout the life of the service/contract upon confirmation from Anglo American that the data received is usable and complete. The supplier must provide Anglo American with a formal confirmation that no data remains in their systems.
  3. In case of a legal obligation to retain the data exists, the supplier must notify Anglo American what the retention period is and agree to notify Anglo American of any access to Anglo American data after the end of the service agreement. The data must be deleted once the retention period expires and a formal confirmation that no data remains in their systems must be provide to Anglo American.
