package org.jp.core.persistence.dao;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.jp.core.persistence.dao.imp.ISecGroups;
import org.jp.core.persistence.pojo.SecGroups;
import org.jp.web.beans.admon.NewGroupBean;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

/**
 * encuestame: system online surveys Copyright (C) 2009 encuestame Development
 * Team
 * 
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of version 3 of the GNU General Public License as published by the
 * Free Software Foundation.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 * 
 * You should have received a copy of the GNU General Public License along with
 * this program; if not, write to the Free Software Foundation, Inc., 59 Temple
 * Place, Suite 330, Boston, MA 02111-1307 USA
 * 
 * Id: SecGroupDaoImp.java Date: 11/05/2009 11:21:55
 * 
 * @author juanpicado package: org.jp.core.persistence.dao
 * @version 1.0
 */
public class SecGroupDaoImp extends HibernateDaoSupport implements ISecGroups {

	private Log log = LogFactory.getLog(this.getClass());

	public void delete(Object obj) {
		// TODO Auto-generated method stub

	}

	public Object find(Class clazz, Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	public List<Object> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	public Integer lastRow(Class clase, String id) {
		// TODO Auto-generated method stub
		return null;
	}

	public void newGroup(NewGroupBean newG) {
		log.info("save new group");
		SecGroups group = new SecGroups();
		group.setDesInfo(newG.getGroupDescription());
		group.setName(newG.getGroupName());
		group.setIdState(new Integer(newG.getStateId()).intValue());
		getHibernateTemplate().save(group);

	}

}
